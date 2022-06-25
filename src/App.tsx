import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AuthProvider } from "./contexts/AuthContext";
import { FilterProvider } from "./contexts/FilterContext";
import { SideBarProvider } from "./contexts/SideBarContext";
import Router from "./routes/Router";
import { authLink } from "./shared/utils/apolloLinks/authLink";
import { networkLink } from "./shared/utils/apolloLinks/networkLink";
import { retryLink } from "./shared/utils/apolloLinks/retryLink";

const client = new ApolloClient({
  cache: new InMemoryCache({
    // addTypename: false,
  }),
  // defaultOptions: {
  //   query: { fetchPolicy: 'no-cache' },
  //   watchQuery: { fetchPolicy: 'no-cache' },
  // }, +
  link: ApolloLink.from([
    authLink(),
    // retryLink(),
    // errorLink(),
    networkLink(),
  ]),
});

function App() {
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
