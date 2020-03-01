module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-gravatar`,
      options: {
        emails: [{ email: `email@example.com`, query: `size=512` }]
      }
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: { nodeType: `gravatar`, imagePath: 'url' }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
