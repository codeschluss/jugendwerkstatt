import { AuthProvider } from "./contexts/AuthContext";
import Router from "./routes/Router";
import { REFRESH_TOKEN } from "./GraphQl/mutation";

import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink, HttpLink, concat, useMutation } from '@apollo/client';







function App() {
  // const [refreshTokenFunction, { loading, error, data }] = useMutation(REFRESH_TOKEN);
    
  const httpLink = new HttpLink({ uri: 'http://localhost:8061/api/graphql' });

  const authMiddleware = new ApolloLink((operation, forward: any) => {
    console.log("intercepting here...");
    return forward(operation);
  });

  const client = new ApolloClient({
    uri: "http://localhost:8061/api/graphql",
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
    headers: {},
  });

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
