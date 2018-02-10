import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { sendEvent, queryState} from '../state'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import NewContact from './NewContact'
import Contact from './Contact'
import EditContact from './EditContact'


const App = () => {
  return (<div>
    <Header/>
    <Contacts/>
  </div>)
}

const Contacts = () => {
  return (<Switch>
    <Route exact path='/' component={AllContacts}/>
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

const getContacts = () => {
  return queryState("getContacts")
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

const AllContacts = (props) => {
  const contactsList = getContacts()
  const handleXClick = (contact) => {
    if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      deleteContact(contact)
    }
    props.history.push('/')
  }
  const handleEditClick = (contact) => {
    props.history.push(`/${contact.id}/edit`)
  }
  return (<div className="container-fluid">
    <div className="row">
      <ul>
        {
          contactsList.map(c => (<li key={c.id}>
            <Link to={`/${c.id}`}>{c.name}</Link>
            <button type="button" onClick={() => { handleEditClick(c) }} className="ml-3 btn btn-sm btn-outline-primary">
              <span className="oi oi-pencil"></span>
            </button>
            <button type="button" onClick={() => { handleXClick(c) }} className="ml-1 btn btn-sm btn-outline-danger">
              <span className="oi oi-x"></span>
            </button>
          </li>))
        }
      </ul>
    </div>
    <div className="row">
      <button className="ml-5 btn btn-sm btn-primary">
        <Link to={'/new'} style={{
            textDecoration: 'none',
            color: 'white'
          }}>Add a contact</Link>
      </button>
    </div>
  </div>)
}


const Header = () => (<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Contact List</a>
  <ul className="navbar-nav">
    <li className="nav-item nav-link">
      <Link to={'/'} style={{
          textDecoration: 'none'
        }}>All Contacts</Link>
    </li>
  </ul>
</nav>)

export default App;
