import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'reacter-router-dom'
import './index.css';
import App from './components/App.js';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
