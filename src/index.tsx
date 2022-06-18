import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TokenStorageProvider } from './contexts/TokenStorageContext';
import './shared/styles/index.css';
import './shared/styles/SlickSlider.css';
import 'react-datepicker/dist/react-datepicker.css';

ReactDOM.render(
  <TokenStorageProvider>
    <App />
  </TokenStorageProvider>,
  document.getElementById('root')
);
