// module.exports = ({
//   basePath = "/",
//   contentPath = "content/",
//   showThemeLogo = true,
//   theme = "dark-blue",
// }) => {
import image from "./src/themes/chris.png"
module.exports = {
  siteMetadata: {
    description: "Portfolio Site for Chris Tran",
    locale: "en",
    showThemeLogo: false,
    title: "Chris Tran | Software Engineer",
    author: "Chris Tran",
    image: image,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config")("dark-blue")),
          require("postcss-input-range"),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "content/",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
// }
