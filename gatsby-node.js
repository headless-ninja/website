const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const { createFilePath } = require('gatsby-source-filesystem');

const rename = promisify(fs.rename);
const writeFile = promisify(fs.writeFile);

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    });

    createNodeField({
      node,
      name: 'slug',
      value: `/docs${slug}`,
    });
  }
};

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const lessonPage = path.resolve('src/templates/docs.jsx');
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: lessonPage,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};

exports.onPostBuild = ({ store }) =>
  Promise.all(
    store.getState().pages.map(async ({ path: p }) => {
      // Don't change the homepage.
      if (p === '/') return Promise.resolve();

      // Don't allow paths that already end with .html or with a slash.
      if (/(\.html?|\/)$/i.test(p)) {
        throw new Error(
          `The path ${p} ends with .html or a slash. Please change it's path.`,
        );
      }

      // Get the generated file.
      const fullPath = path.resolve(`public${p}/index.html`);
      if (!fullPath) {
        throw new Error(`The page ${p} could not be found.`);
      }

      // Rename the generated file from docs/index.html to docs.html
      await rename(fullPath, fullPath.replace('/index.html', '.html'));

      // Create a redirect from the version with a slash.
      return writeFile(
        fullPath,
        `<!DOCTYPE html>
        <html lang="en-US">
          <meta charset="utf-8">
          <title>Redirecting&hellip;</title>
          <link rel="canonical" href="${p}">
          <meta http-equiv="refresh" content="0; url=${p}">
          <meta name="robots" content="noindex">
          <h1>Redirecting&hellip;</h1>
          <a href="${p}">Click here if you are not redirected.</a>
          <script>location="${p}"</script>
        </html>`.replace(/(\r\n|\r|\n)+( )+/g, ''),
      );
    }),
  );
