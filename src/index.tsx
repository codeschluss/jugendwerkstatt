import { Suspense } from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { BrowserRouter } from "react-router-dom";

import App from "./AppV2";
import { apolloClient } from "./GraphQl/config";
import { SideBarProvider } from "./contexts/SideBarContext";

// import { FeedbackProvider } from "./contexts/FeedbackContext";
// import { TokenStorageProvider } from "./contexts/TokenStorageContext";

import "./shared/styles/index.css";
import "./shared/styles/SlickSlider.css";
import "react-datepicker/dist/react-datepicker.css";
import { FilterProvider } from "./contexts/FilterContext";

// ReactDOM.render(
//   <TokenStorageProvider>
//     <FeedbackProvider>
//       <App />
//     </FeedbackProvider>
//   </TokenStorageProvider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <ApolloProvider client={apolloClient}>
      <SideBarProvider>
        <FilterProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </LocalizationProvider>
        </FilterProvider>
      </SideBarProvider>
    </ApolloProvider>
  </Suspense>,
  document.getElementById("root")
);
