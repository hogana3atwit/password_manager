import React from 'react';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import App from './app.js';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');


const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
<App tab="root" />
</Provider>
);

reportWebVitals();

