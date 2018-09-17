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
  style: [String],
  ingredients: [IngredientSchema],
  directions: [String]
});

module.exports = mongoose.model('Recipes', RecipeSchema);
