const { Recipes, Brews } = require('../models');

module.exports = {
  Query: {
    async brews() {
      return await Brews.find();
    },

    async brew(parent, { id }) {
      return await Brews.findById(id);
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
    }
  }
}
