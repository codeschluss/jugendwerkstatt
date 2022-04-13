import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:8061/api/graphql",
  cache: new InMemoryCache(),
});
