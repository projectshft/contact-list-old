import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';   
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
    <BrowserRouter basename="/contacts">
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));

