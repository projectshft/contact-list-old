import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {onUpdate, forceUpdate, sendEvent, queryState} from './state'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

const App = () => {
  return (<div>
    <Header />
    <Main />
  </div>)
}

const Contacts = () => {
  return (
    <Switch>
      <Route exact path='/contacts' component={AllContacts}/>
      <Route path='/contacts/:id' component={Contact}/>
    </Switch>
)
}

const getContacts = () => {
  return queryState("getContacts")
}

const getSpecificContact = (id) => {
  console.log(queryState("getSpecificContact",id))
  return queryState("getSpecificContact",id)
}

const AllContacts = (props) => {
  const contactsList = getContacts()
  return (
    <div className = "container-fluid">
      <div className = "row">
        <ul>
          {
            contactsList.map(c => (<li key={c.id}>
              <Link to={`/contacts/${c.id}`}>{c.name}</Link>
              <button type="button" className="ml-3 btn btn-sm btn-outline-primary">
                <span className="oi oi-pencil"></span>
              </button>
              <button type="button" className="ml-1 btn btn-sm btn-outline-danger">
                <span className="oi oi-x"></span>
              </button>
            </li>))
          }
        </ul>
      </div>
      <div className="row">
        <button className="ml-5 btn btn-sm btn-primary">Add a contact</button>
      </div>
    </div>)
}

const Contact = (props) => {
  const contact = getSpecificContact(parseInt(props.match.params.id))
  return (
    <div className="container-fluid">
      <div className="row ml-3">
        <button className="btn btn-outline-secondary"><Link to='/contacts'>Back</Link></button>
      </div>
      <div className="row ml-3">
        <img src={contact.imageUrl}></img>
      </div>
      <div className="row ml-3">
        <h2>{contact.name}<button type="button" className="ml-3 btn btn-sm btn-outline-primary">
          <span className="oi oi-pencil"></span>
        </button>
          <button type="button" className="ml-1 btn btn-sm btn-outline-danger">
            <span className="oi oi-x"></span>
          </button></h2>

      </div>
      <div className="row ml-3">
        <h4>email: {contact.email}</h4>
      </div>
      <div className="row ml-3">
        <h4>phone number: {contact.number}</h4>
      </div>
    </div>
  )
}

const Header = () => (<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Contact List</a>
  <ul className="navbar-nav">
    <li className="nav-item nav-link">
      <Link to={'/contacts'}>All Contacts</Link>
    </li>
  </ul>
</nav>)

const Main = (props) => {
  return (<main>
    <Switch>
      <Route exact path='/' component={Contacts}/>
      <Route path='/contacts' component={Contacts}/>
    </Switch>
  </main>)
}

export default App;
