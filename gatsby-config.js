module.exports = {
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: 'Source Code Pro',
						variants: ['300', '400', '500', '700']
					}
				]
			},
		},
	]
}
