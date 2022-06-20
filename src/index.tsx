import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FeedbackProvider } from './contexts/FeedbackContext';
import { TokenStorageProvider } from './contexts/TokenStorageContext';
import './shared/styles/index.css';
import './shared/styles/SlickSlider.css';

ReactDOM.render(
  <React.StrictMode>
    <TokenStorageProvider>
      <FeedbackProvider>
        <App />
      </FeedbackProvider>
    </TokenStorageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
