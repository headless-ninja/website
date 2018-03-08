const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

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
            frontmatter {
              tags
              category
              type
            }
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
