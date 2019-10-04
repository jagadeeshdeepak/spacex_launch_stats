import React from 'react';
import './App.css';
import logo from './logo.png';

// get ApolloClient everything to setup apollo client
import ApolloClient from 'apollo-boost';
// this is similar to redux for state management. simply wrap the apollo client inside the
// ApolloProvider and pass it on.
import { ApolloProvider } from 'react-apollo';

// create an ApolloClient that hits the graphql server end point from front end
const client = new ApolloClient( {
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="component">
        <img src={logo} alt="SpaceX" style={{ width: 800, height: 150, display: 'block', margin: 'auto' }}></img>
      </div>
    </ApolloProvider>
  );
}

export default App;
