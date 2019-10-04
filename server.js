const express = require('express');
const graphqlHTTP = require('express-graphql');

// init express
const app = express();

// init an endpoint for graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  }),
);

app.listen(4000);

