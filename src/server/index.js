const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const videoDao = require("./videoDao");
const { GRAPHQL_ENDPOINT, GRAPHQL_PORT } = require("./properties");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ api: videoDao }),
});

const app = express();
server.applyMiddleware({ app });

app.use("/videoStore", express.static(__dirname + "/videoStore"));

app.listen({ port: GRAPHQL_PORT }, () => {
  console.log(`Server started at ${GRAPHQL_ENDPOINT}${server.graphqlPath}`);
});
