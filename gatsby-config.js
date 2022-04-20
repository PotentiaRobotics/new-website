module.exports = {
  siteMetadata: {
    title: `Potentia Robotics`,
    titleTemplate: "%s | Potentia Robotics",
    description: `The website of Potentia Robotics, the first team of high school students to design and build a fully-functioning humanoid robot.`,
    author: `@potentiarobotics`,
    siteUrl:"https://potentiarobotics.com",
    keywords: "potentia robotics, potentia, robotics, high school, humanoid robotics, first high school humanoid robot, tjhsst",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Potentia Robotics`,
        short_name: `potentia`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `./src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
