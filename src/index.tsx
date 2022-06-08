import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { API_URL } from './config/app';
import './shared/styles/index.css';
import './shared/styles/SlickSlider.css';
import 'react-datepicker/dist/react-datepicker.css';

const httpLink = new HttpLink({ uri: API_URL + 'graphql' });

// const logoutLink = onError(({ networkError }) => {
//   if (networkError.statusCode === 401) logout();
// })

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: 'Bearer ' + localStorage.getItem('accessToken') || '',
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
