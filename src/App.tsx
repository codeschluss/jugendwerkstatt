import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./contexts/AuthContext";
import { FilterProvider } from "./contexts/FilterContext";
import { SideBarProvider } from "./contexts/SideBarContext";
import useApollo from "./hooks/useApollo";
import Router from "./routes/Router";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  const { client } = useApollo();

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
