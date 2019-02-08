const authResolver = require("./auth");
const postResolver = require("./post");

const rootResolver = {
  ...authResolver,
  ...postResolver
};

module.exports = rootResolver;
