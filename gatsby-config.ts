import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Resume - Gatsby`,
    siteUrl: `https://www.oliverwhite.cs`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-mantine",
    "gatsby-plugin-emotion",
    "gatsby-plugin-mdx",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: process.env.DATABASE_NAME,
        typePrefix: "",
        connectionString: process.env.DATABASE_URL,
        collection: [`Employment`, `Position`, `Education`],
        extraParams: {
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
        preserveObjectIds: true,
      },
    },
  ],
};

export default config;
