import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { sendEvent, queryState} from '../state'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import NewContact from './NewContact'
import Contact from './Contact'
import EditContact from './EditContact'
import AllContacts from './ContactLists'

const App = () => {
  return (<div>
    <Header/>
    <Contacts/>
  </div>)
}

const Contacts = () => {
  return (<Switch>
    <Route exact path='/' render={(params) => (
      <AllContacts {...params} deleteContact={deleteContact} getContacts={getContacts}/>
    )}/>
    <Route path='/personal' render={(params) => (
      <AllContacts {...params} deleteContact={deleteContact} getContacts={getContacts} />
    )}/>
    <Route path='/business' render={(params) => (
      <AllContacts {...params} deleteContact={deleteContact} getContacts={getContacts} />
    )}/>
    <Route path='/family' render={(params) => (
      <AllContacts {...params} deleteContact={deleteContact} getContacts={getContacts} />
    )}/>
    <Route path='/other' render={(params) => (
      <AllContacts {...params} deleteContact={deleteContact} getContacts={getContacts} />
    )}/>
    <Route path='/new' render={(params) => (
      <NewContact {...params} addContact={addContact} />
    )}/>
    <Route exact path='/:id' render={(params) => (
      <Contact {...params} getSpecificContact={getSpecificContact} deleteContact={deleteContact}/>
    )}/>
    <Route path='/:id/edit' render={(params) => (
      <EditContact {...params} getSpecificContact={getSpecificContact} deleteContact={deleteContact} editContact={editContact}/>
    )}/>
  </Switch>)
}

const editContact = (contact) => {
  return sendEvent("editContact", contact)
}

const getContacts = (data) => {
  return queryState("getContacts",data)
}

const getSpecificContact = (id) => {
  return queryState("getSpecificContact", id)
}

const addContact = (contact) => {
  return sendEvent("addContact", contact)
}

const deleteContact = (contact) => {
  sendEvent("deleteContact", contact)
}

const Header = () => (<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="navbar-brand">Contact List</div>
  <ul  className="nav navbar-nav" role="tablist">
    <li className="nav nav-item nav-link">
      <Link to={'/'} style={{
          textDecoration: 'none'
      }}>All Contacts</Link>
    </li>
    <li className="nav nav-item nav-link">
      <Link to={'/personal'} style={{
          textDecoration: 'none'
      }}>Personal</Link></li>
    <li className="nav nav-item nav-link">
      <Link to={'/business'} style={{
          textDecoration: 'none'
      }}>Business</Link></li>
    <li className="nav nav-item nav-link">
      <Link to={'/family'} style={{
          textDecoration: 'none'
      }}>Family</Link>
    </li>
    <li className="nav nav-item nav-link">
      <Link to={'/other'} style={{
          textDecoration: 'none'
        }}>Other</Link>
      </li>

    </ul>
  </nav>
  )

export default App;
