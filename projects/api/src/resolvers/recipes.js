const { Recipes } = require('../models');

module.exports = {
  Query: {
    async recipes() {
      const recipes = await Recipes.find();
      return recipes;
    },

    async recipe(parent, { id }) {
      const recipe = await Recipes.findById(id);
      return recipe;
    },
  },

  Mutation: {
    addRecipe(parent, { recipe }) {
      const savedRecipe = new Recipes(recipe);
      savedRecipe.save();

      return savedRecipe;
    },
  },
}
