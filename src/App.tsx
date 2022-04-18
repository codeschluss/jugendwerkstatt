import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { AuthProvider } from "./contexts/AuthContext";
import Router from "./routes/Router";

let something = false;
const httpLink = new HttpLink({ uri: "http://localhost:8061/api/graphql" });

const authMiddleware = new ApolloLink((operation, forward: any) => {
  //TODO if expired something = true;
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
  headers: {},
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
