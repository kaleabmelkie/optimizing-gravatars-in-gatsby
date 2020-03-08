module.exports = {
  plugins: [
    // step 1:
    {
      resolve: `gatsby-source-gravatar`,
      options: {
        emails: [
          { email: `email@example.com`, query: `size=512` },
          { email: `queryis@optional.com` },
          `justanemailstringis@supportedtoo.com`
        ]
      }
    },
    // step 2:
    {
      resolve: `gatsby-plugin-remote-images`,
      options: { nodeType: `gravatar`, imagePath: 'url' }
    },

    // needed for 'gatsby-image':
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
