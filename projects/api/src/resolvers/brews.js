const { Recipes, Brews } = require('../models');

module.exports = {
  Query: {
    async brews() {
      return Brews.find();
    },

    async brew(parent, { id }) {
      return Brews.findById(id);
    },
  },
  Mutation: {
    async addBrew(parent, { fromRecipe, brewDetails }) {
      const recipe = await Recipes.findById(fromRecipe);

      const newBrew = new Brews({
        recipe,
        ...brewDetails,
      });

      await newBrew.save();

      return newBrew;
    },
  },
};
