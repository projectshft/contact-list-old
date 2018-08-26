import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import ReactDOM from 'react-dom'
import App from './App.js';


 ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
