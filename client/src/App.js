import React from 'react';
import './App.css';
import logo from './logo.png';

// get ApolloClient everything to setup apollo client
import ApolloClient from 'apollo-boost';
// this is similar to redux for state management. simply wrap the apollo client inside the
// ApolloProvider and pass it on.
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';


// create an ApolloClient that hits the graphql server end point from front end
const client = new ApolloClient( {
  uri: 'http://localhost:5000/graphql'
})

// add Router and tell whats the component that needs to be rendered
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{ width: 500, height: 100, display: 'block', margin: 'auto' }}></img>
          <Route exact path="/" component={Launches}/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
