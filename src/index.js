import { BrowserRouter} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap'
import './index.css';
import App from './App';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
