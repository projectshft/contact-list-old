import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppCSS from './App.css';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
