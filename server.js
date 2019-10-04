const express = require('express');
const graphqlHTTP = require('express-graphql');
const PORT = process.env.PORT || 5000;
const schema = require('./schema');

// init express
const app = express();

// init an endpoint for graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

