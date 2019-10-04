// class based component
// use ES& react/redux/graphql-native snippets externsion in vscode to generate class based component easily
// after installing the plug in hit rce tab, boom u get the default snippet
import React, { Component } from 'react';
// used to make query
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// create a query similar to how we do it in graphiql
// gql with back ticks is the way you define a query from the client side using gql library
// LaunchesQuery is just naming the query for launches.
// NOTE: the query structure should be exactly same as how we query
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Launches</h1>
          <Query query={LAUNCHES_QUERY}>
            {
              ({ loading, error, data }) => {
                if (loading) return <h4>Loading...</h4>
                if(error) console.log(error);
                console.log(data);
                return <h1>data</h1>
              }
            }
          </Query>
      </div>
    )
  }
}

export default Launches;

