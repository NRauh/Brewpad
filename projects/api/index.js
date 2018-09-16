const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { Recipes } = require('./src/models');

mongoose.connect('mongodb://localhost/brewpad');
const db = mongoose.connection;

const resolvers = {
  Query: {
    recipes: async () => {
      const recipes = await Recipes.find();

      return recipes;
    },
    recipe: (parent, args) => recipes[args.id]
  },
  Mutation: {
    addRecipe(parent, { recipe }) {
      const savedRecipe = new Recipes(recipe);
      savedRecipe._id = savedRecipe._id.toString();

      savedRecipe.save();

      return savedRecipe;
    },
  },
};

const typeDefs = fs.readFileSync(path.join(__dirname, '/src/schemas.graphql'), 'utf8');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

db.on('error', () => {
  console.error('Failed to connect to db');
});

db.once('open', () => {
  console.log('connected to db');

  server.listen().then(({ url }) => {
    console.log(`Server listening at: ${url}`);
  });
});
