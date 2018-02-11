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
import gapi from "./api.js"

//Google People API stuff
const CLIENT_ID = '347488225091-rfs761jces9tujlh5pn4n544uijrqbr4.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCaj-LT9CWSH2KojeKLbk0TxDc-NOJIE8s';

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/people/v1/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/contacts.readonly";


/**
 *  On load, called to load the auth2 library and API client library.
 */
const handleClientLoad = () => {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
const initClient = () => {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
const updateSigninStatus = (isSignedIn) => {
  if (isSignedIn) {
    listConnectionNames()
    //tells the state model that google contacts have been added
    updateSyncStatus()
  }
}

/**
 *  Sign in the user upon button click.
 */
const handleAuthClick = (event) => {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 * Print the display name if available for 10 connections.
 */
const listConnectionNames = () => {
  gapi.client.people.people.connections.list({
     'resourceName': 'people/me',
     'pageSize': 1000,
     'personFields': 'names,emailAddresses,phoneNumbers,coverPhotos,photos',
   }).then((response) => {
     const contacts = response.result.connections
     for (let i = 0; i<contacts.length; i++) {
       const contact = {
         name: contacts[i].names[0].displayName,
         imageUrl: contacts[i].photos[0].url,
         email: contacts[i].emailAddresses ? contacts[i].emailAddresses[0].value : "",
         number: contacts[i].phoneNumbers ? contacts[i].phoneNumbers[0].value : "",
         personal: false,
         business: false,
         family: false,
         other: false,
         fromGoogle: true,
       }
        addContact(contact)
     }

     })
     return true
   };


handleClientLoad()
//END //Google People API stuff



const App = () => {
  return (<div>
    <Header/>
    <Contacts/>
  </div>)
}

const Contacts = () => {
  return (<Switch>
    <Route exact path='/' render={(params) => (
      <AllContacts {...params} handleAuthClick={handleAuthClick} deleteContact={deleteContact} getSyncStatus={getSyncStatus} getContacts={getContacts}/>
    )}/>
    <Route path='/personal' render={(params) => (
      <AllContacts {...params} handleAuthClick={handleAuthClick} deleteContact={deleteContact} getSyncStatus={getSyncStatus} getContacts={getContacts} />
    )}/>
    <Route path='/business' render={(params) => (
      <AllContacts {...params} handleAuthClick={handleAuthClick} deleteContact={deleteContact} getSyncStatus={getSyncStatus} getContacts={getContacts} />
    )}/>
    <Route path='/family' render={(params) => (
      <AllContacts {...params} handleAuthClick={handleAuthClick} deleteContact={deleteContact} getSyncStatus={getSyncStatus} getContacts={getContacts} />
    )}/>
    <Route path='/other' render={(params) => (
      <AllContacts {...params} handleAuthClick={handleAuthClick} deleteContact={deleteContact} getSyncStatus={getSyncStatus} getContacts={getContacts} />
    )}/>
    <Route path='/fromGoogle' render={(params) => (
      <AllContacts {...params} handleAuthClick={handleAuthClick} deleteContact={deleteContact} getSyncStatus={getSyncStatus} getContacts={getContacts} />
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

const getSyncStatus = () => {
  return queryState("getSyncStatus")
}

const updateSyncStatus = () => {
  sendEvent("updateSyncStatus")
}

const Header = () => {

  const fromGoogle = getSyncStatus() ? "" : "hide"

  return (<nav className="navbar navbar-expand-sm navbar-light bg-light">
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
        <li className={`${fromGoogle} nav nav-item nav-link`}>
          <Link to={'/fromGoogle'} style={{
            textDecoration: 'none'
          }}>Google Contacts</Link>
        </li>

      </ul>
    </nav>
  )
}

export default App;
