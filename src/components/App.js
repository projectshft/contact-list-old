import React, { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import '../node_modules/bootstrap'
import './App.css'


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

const Header = () => (
  <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      <span>Add Contact</span>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={ContactHomeList}/>
    </Switch>
  </main>
)

const ContactHomeList = () => (
  <Switch>
    <Route exact path='/roster' component={ContactList}/>
    <Route path='/roster/:id' component={ContactView}/>
  </Switch>
)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
