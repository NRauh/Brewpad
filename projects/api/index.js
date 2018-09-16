const { ApolloServer, gql } = require('apollo-server');

const recipes = [
  {
    id: 0,
    title: 'Test Recipe',
    description: 'A nice test beer',
    projectedABV: 4.2,
    yields: '5 gallons'
  }
];

const typeDefs = gql`
  type Recipe {
    id: Int
    title: String
    description: String
    projectedABV: Float
    yields: String
  }

  type Query {
    recipes: [Recipe]
    recipe(id: Int!): Recipe
  }
`;

const resolvers = {
  Query: {
    recipes: () => recipes,
    recipe: (parent, args) => recipes[args.id]
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server listening at: ${url}`);
});
