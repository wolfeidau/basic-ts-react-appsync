import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'

const client = new AWSAppSyncClient({
  url: 'test',
  region: 'test',
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: 'test',
  }
})

interface Props {

}

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
)

export default WithProvider