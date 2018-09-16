const recipes = require('./recipes');

module.exports = {
  Query: {
    ...recipes.Query,
  },
  Mutation: {
    ...recipes.Mutation,
  },
};
