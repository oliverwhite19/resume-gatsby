exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type mongodbPosition implements Node {
        employment: mongodbEmployment @link(by: "mongodb_id", from: "employmentId")
    }
    type mongodbEmployment implements Node {
        positions: [mongodbPosition] @link(by: "employmentId", from: "mongodb_id")
    }
    `;
  createTypes(typeDefs);
};
