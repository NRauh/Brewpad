const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const resolvers = require('./src/resolvers');

mongoose.connect('mongodb://localhost/brewpad');
const db = mongoose.connection;

const typeDefs = fs.readFileSync(
  path.join(__dirname, '/src/schemas.graphql'),
  'utf8',
);

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
