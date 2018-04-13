module.exports = {
  siteMetadata: {
    // This is used by gatsby-plugin-sitemap
    siteUrl: `https://headless.ninja`,
  },
  plugins: [
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/layouts/typography.js`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/docs/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-T3Z2K6F',
        includeInDevelopment: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Headless Ninja',
        start_url: '/',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
  ],
};
