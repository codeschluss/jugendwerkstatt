<<<<<<< HEAD
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AuthProvider } from "./contexts/AuthContext";
=======
import { useQuery, gql } from "@apollo/client";
import { useGetUsersQuery } from "./graphql/gen/graphql";
>>>>>>> 66b4399ab5b17da65a7943ad8058d97089741438
import Router from "./routes/Router";

const client = new ApolloClient({
  uri: "http://localhost:8061/api/graphql",
  cache: new InMemoryCache(),
});

function App() {
<<<<<<< HEAD
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router />;
      </AuthProvider>
    </ApolloProvider>
  );
=======
  const { loading, error, data } = useGetUsersQuery();
  
  console.log("this", loading, data, error);

  return <Router />;
>>>>>>> 66b4399ab5b17da65a7943ad8058d97089741438
}

export default App;
