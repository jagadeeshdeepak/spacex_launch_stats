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
import Launch from './components/Launch';


// create an ApolloClient that hits the graphql server end point from front end
const client = new ApolloClient( {
  uri: 'http://localhost:5000/graphql'
})

// add Router and specify what's the component that should be rendered
// :flight_number is the way to add a parameter in the path
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{ width: 500, height: 100, display: 'block', margin: 'auto' }}></img>
          <Route exact path="/" component={Launches}/>
          <Route exact path="/launch/:flight_number" component={Launch}/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
