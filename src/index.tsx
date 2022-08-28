import { Suspense, useContext } from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { apolloClient } from "./GraphQl/config";
import { SideBarProvider } from "./contexts/SideBarContext";
import { FilterProvider } from "./contexts/FilterContext";
import { ErrorSnackbar } from "./shared/components/ErrorSnackbar/ErrorSnackbar";

import "./shared/styles/index.css";
import "./shared/styles/SlickSlider.css";
import "react-datepicker/dist/react-datepicker.css";
import { VideoChatProvider } from "./contexts/VideoChatContext";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <ApolloProvider client={apolloClient}>
      <SideBarProvider>
        <FilterProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <VideoChatProvider>
              <BrowserRouter>
                <App />
                <ErrorSnackbar />
              </BrowserRouter>
            </VideoChatProvider>
          </LocalizationProvider>
        </FilterProvider>
      </SideBarProvider>
    </ApolloProvider>
  </Suspense>,
  document.getElementById("root")
);
