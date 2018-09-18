const mongoose = require('mongoose');
const { RecipeSchema } = require('./Recipes');

const GravitySchema = new mongoose.Schema({
  date: Date,
  gravity: Number,
});

const TemperatureSchema = new mongoose.Schema({
  date: Date,
  temperature: String,
});

const BrewsSchema = new mongoose.Schema({
  recipe: RecipeSchema,
  gravityReadings: [GravitySchema],
  temperatureReadings: [TemperatureSchema],
  bottleDate: Date,
  consumeDate: Date,
  notes: String,
  rating: Number,
});

const Brews = mongoose.model('Brews', BrewsSchema);

module.exports = {
  Brews,
};
