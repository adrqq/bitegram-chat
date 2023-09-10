/* eslint-disable @typescript-eslint/no-unused-vars */
import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './redux/store';
import './reset.css';
import App from './App';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);
