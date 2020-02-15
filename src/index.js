import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import uuid from 'uuid/v4'



ReactDOM.render((
  <BrowserRouter >
    <App />
  </BrowserRouter>
), document.getElementById('root'))
