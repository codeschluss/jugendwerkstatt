import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { API_URL } from "./config/app";
import { AuthProvider } from "./contexts/AuthContext";
import { SideBarProvider } from "./contexts/SideBarContext";
import TokenStorageContext from "./contexts/TokenStorageContext";
import Router from "./routes/Router";

function App() {
  const { accessToken } = useContext(TokenStorageContext);

  const httpLink = new HttpLink({ uri: API_URL + "graphql" });
  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: "Bearer " + accessToken,
      },
    }));

    return forward(operation);
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
  });

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <SideBarProvider>
          <Router />
        </SideBarProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
