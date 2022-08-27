import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const config: GatsbyConfig = {
  siteMetadata: {
    title: "Oliver White - Resume",
    image: "/images/favicon.ico",
    siteUrl: "https://www.oliverwhite.ca",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-mantine",
    "gatsby-plugin-emotion",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-use-dark-mode",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-mongodb",
      options: {
        dbName: process.env.DATABASE_NAME,
        typePrefix: "",
        connectionString: process.env.DATABASE_URL,
        collection: ["Employment", "Position", "Education"],
        extraParams: {
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
        preserveObjectIds: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Oliver White Resume",
        short_name: "OWResume",
        start_url: "/",
        background_color: "#1A1B1E",
        theme_color: "#1A1B1E",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/images/favicon.ico", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};

export default config;
