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
  const definitions :any = operation.query.definitions[0];
  const requestName = definitions.selectionSet.selections[0].name.value;
  console.log('requestName:', requestName);

  if(requestName!="createToken" && requestName!="refreshToken"){
    console.log('this is a request that needs authorization');
    const jwtAccessToken = localStorage.getItem('jugendwerkstattAccessToken');

    // if(jwtAccessToken!=null){
      //   const decodedJwtToken = JSON.parse(atob(jwtAccessToken.split('.')[1]));
      //   const jwtExpirationDatetimeInSeconds = decodedJwtToken.exp;
      //   const currentDatetimeInSeconds = Date.now()/1000;        

      //   if(jwtExpirationDatetimeInSeconds >= currentDatetimeInSeconds){
      //    ...
      //  }
    //}

    operation.setContext(({ headers = {} }) => ({
      headers: {
        headers,
        authorization: "bearer "+jwtAccessToken
      }
    }));
  }
  
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
