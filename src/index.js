import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const App = () => (
  <div>
    <header>
      <h1>Not Your Parents's Rolodex</h1>
    </header>
  </div>
)



ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
