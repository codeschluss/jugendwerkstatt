import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
=======
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { client } from "./graphql/client";
import { ApolloProvider } from "@apollo/client";
>>>>>>> 66b4399ab5b17da65a7943ad8058d97089741438

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
