import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  // <React.StrictMode>
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);