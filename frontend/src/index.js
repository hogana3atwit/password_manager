import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);