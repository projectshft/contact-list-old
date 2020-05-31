import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import Contact from './components/Contact';
// import PropTypes from 'prop-types';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
