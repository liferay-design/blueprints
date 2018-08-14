module.exports = {
  siteMetadata: {
    title: 'Liferay Blueprints',
    author: 'Justin',
    test: 'test',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-resolve-src',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: './src/',
      },
    },
  ],
}
