const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  ingredient: String,
  amount: String,
});

const RecipeSchema = new mongoose.Schema({
  title: String,
  projectedABV: Number,
  yields: String,
  description: String,
  ingredients: [IngredientSchema],
});

module.exports = mongoose.model('Recipes', RecipeSchema);
