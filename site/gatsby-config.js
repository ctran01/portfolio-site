module.exports = {
  siteMetadata: {
    description: "Portfolio site for Chris Tran",
    locale: "en",
    title: "Chris Tran | Software Engineer",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "dark-blue",
      },
    },
  ],
}
