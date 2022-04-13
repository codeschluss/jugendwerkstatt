import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { client } from "./graphql/client";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
