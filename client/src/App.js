import React from 'react';
import './App.css';
import logo from './logo.png';

// get ApolloClient everything to setup apollo client
import ApolloClient from 'apollo-boost';
// this is similar to redux for state management. simply wrap the apollo client inside the
// ApolloProvider and pass it on.
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';

// create an ApolloClient that hits the graphql server end point from front end
const client = new ApolloClient( {
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="component" style={{ marginLeft: '75px', marginRight: '75px' }}>
        <img src={logo} alt="SpaceX" style={{ width: 500, height: 100, display: 'block', margin: 'auto' }}></img>
        <Launches></Launches>
      </div>
    </ApolloProvider>
  );
}

export default App;
