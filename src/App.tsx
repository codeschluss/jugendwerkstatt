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
import { FilterProvider } from "./contexts/FilterContext";
import { SideBarProvider } from "./contexts/SideBarContext";
import TokenStorageContext from "./contexts/TokenStorageContext";
import Router from "./routes/Router";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
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
          <FilterProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Router />
            </LocalizationProvider>
          </FilterProvider>
        </SideBarProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
