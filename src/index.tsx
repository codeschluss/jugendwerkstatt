import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { BrowserRouter } from 'react-router-dom';
import { ErrorSnackbar } from './shared/components/ErrorSnackbar/ErrorSnackbar';

import App from './App';
import { apolloClient } from './GraphQl/config';

import { FeedbackProvider } from './contexts/FeedbackContext';
import { TokenStorageProvider } from './contexts/TokenStorageContext';

import './shared/styles/index.css';
import './shared/styles/SlickSlider.css';
import 'react-datepicker/dist/react-datepicker.css';

ReactDOM.render(
  <TokenStorageProvider>
    <FeedbackProvider>
      <ApolloProvider client={apolloClient()}>
        <App />
        <ErrorSnackbar />
      </ApolloProvider>
    </FeedbackProvider>
  </TokenStorageProvider>,
  document.getElementById('root')
  // );

  // ReactDOM.render(
  //   <Suspense fallback={<div>Loading...</div>}>
  //     <ApolloProvider client={apolloClient}>
  //       <LocalizationProvider dateAdapter={AdapterDayjs}>
  //         <BrowserRouter>
  //           <App />
  //         </BrowserRouter>
  //       </LocalizationProvider>
  //     </ApolloProvider>
  //   </Suspense>,
  //   document.getElementById("root")
);
