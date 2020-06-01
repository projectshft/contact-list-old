import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Wraps the entire app with a Browser to enable functioning links
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
document.getElementById('root'));
