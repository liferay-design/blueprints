module.exports = {
  siteMetadata: {
    title: 'Liferay Blueprints',
    author: 'Justin',
    test: 'test'
  },
  plugins:
	[
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-plugin-typography',
			option: {
				pathToConfigModule: 'src/utils/typography.js',
			},
		},
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				// Accepts all options defined by `babel-plugin-emotion` plugin.
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: './src/'
			},
		},
	],
}
