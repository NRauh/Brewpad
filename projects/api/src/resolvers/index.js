const recipes = require('./recipes');
const brews = require('./brews');

module.exports = {
  Query: {
    ...recipes.Query,
  },
  Mutation: {
    ...recipes.Mutation,
    ...brews.Mutation,
  },
};
