import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import New from './new';
import Contact from './contact';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />        
    </BrowserRouter>,
    document.getElementById('root')
);
  
