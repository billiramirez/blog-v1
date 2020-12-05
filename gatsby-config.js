require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `The More You Teach, The More You Learn`,
    author: `Billi Ramirez`,
    description: `I'm taking this space to share with you my knowledge and experiences I've
    learned through this path.`,
    siteUrl: `https://billiramirez.dev`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/billiramirezdev`,
      },
      {
        name: `github`,
        url: `https://github.com/billiramirez`,
      },
    ],
  },
}
