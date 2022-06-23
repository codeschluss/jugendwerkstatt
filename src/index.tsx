import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FeedbackProvider } from './contexts/FeedbackContext';
import { TokenStorageProvider } from './contexts/TokenStorageContext';
import './shared/styles/index.css';
import './shared/styles/SlickSlider.css';
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.render(
  <TokenStorageProvider>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </TokenStorageProvider>,
  document.getElementById('root')
);
