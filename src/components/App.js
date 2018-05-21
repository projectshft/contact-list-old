import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import EditContact from './ContactEdit'
import ContactView from './ContactView'
import Header from './Header'
import ContactList from './ContactList'

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
