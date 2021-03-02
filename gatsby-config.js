module.exports = {
  siteMetadata: {
    title: ``,
    description: `Build real things to learn React. Practice makes a better dev!`,
    author: `@chrisoncode`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: 50,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Make React Apps`,
        short_name: `make-react-apps`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dab.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Orbitron', 'Russo One', 'Fugaz One'],
        },
      },
    },
  ],
}
