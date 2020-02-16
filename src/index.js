//Broswer Router uses the HTML5 for more dynamic sites 
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';

//Renders to the root element. Attaches our App to the root div
//in the index.HTML file
//the App is a child of the BrowserRouter
ReactDOM.render((
  <BrowserRouter >
    <App />
  </BrowserRouter>
), document.getElementById('root'))
