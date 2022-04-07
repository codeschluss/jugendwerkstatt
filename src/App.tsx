import { useQuery, gql } from "@apollo/client";
import { useGetUsersQuery } from "./graphql/gen/graphql";
import Router from "./routes/Router";

function App() {
  const { loading, error, data } = useGetUsersQuery();
  
  console.log("this", loading, data, error);

  return <Router />;
}

export default App;
