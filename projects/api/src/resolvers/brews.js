const { Recipes, Brews } = require('../models');

module.exports = {
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
