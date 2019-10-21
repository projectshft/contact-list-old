import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import New from './Components/new';
import Contact from './Components/contact';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />        
    </BrowserRouter>,
    document.getElementById('root')
);
  
