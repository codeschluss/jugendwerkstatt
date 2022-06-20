import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TokenStorageProvider } from "./contexts/TokenStorageContext";
import "./shared/styles/index.css";
import "./shared/styles/SlickSlider.css";

ReactDOM.render(
  <React.StrictMode>
    <TokenStorageProvider>
      <App />
    </TokenStorageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
