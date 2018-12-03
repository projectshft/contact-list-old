import { BrowserRouter } from 'react-router-dom';
import { render } from "react-dom";
import React from "react";
import App from './components/App.js';

render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('root'))
