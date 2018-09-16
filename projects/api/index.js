const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const { Recipes } = require('./models');

mongoose.connect('mongodb://localhost/brewpad');
const db = mongoose.connection;

const typeDefs = gql`
  type Recipe {
    _id: String
    title: String
    description: String
    projectedABV: Float
    yields: String
  }

  input RecipeInput {
    title: String!
    description: String
    projectedABV: Float
    yields: String
  }

  type Query {
    recipes: [Recipe]
    recipe(id: Int!): Recipe
  }

  type Mutation {
    addRecipe(recipe: RecipeInput!): Recipe
  }
`;

const resolvers = {
  Query: {
    recipes: async () => {
      const recipes = await Recipes.find();

      return prepped;
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
