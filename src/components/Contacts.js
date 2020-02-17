import { Switch, Route } from 'react-router-dom'
import React from 'react'
import AllContacts from "./AllContacts.js"
import EditContact from "./EditContact.js"
import NewContact from "./NewContact.js"
import Contact from "./Contact.js"
import PropTypes from 'prop-types'


//The Contacts component handles routing between all URLs which contain "/contacts/"
//This includes the NewContact, EditContact, Contact and AllContacts pages
const Contacts = ({addContact, editContact, contacts, deleteContact}) => (
  <Switch>
    //If the URL is "/contacts/new" take the user to the page for creating a new contact
    <Route path='/contacts/new' render={(routerProps) => (
      //The NewContact component is handed the router history prop
      //As well as the contacts array from App.state.contacts
      //And the addContact function from the App component
      <NewContact history={routerProps.history}
      contacts={contacts}
      addContact={addContact} />
    )}/>

    //If the URL is "contacts/:contactId/edit" take the user to the page
    //For editing the current contact
    <Route path="/contacts/:id/edit" render={(routerProps) => (
      //The Edit Component is handed the router's history prop
      //As well as the contact id for the current contact
      //The contacts array from App.state.contacts and the editContact function
      <EditContact contactId={routerProps.match.params.id}
      history={routerProps.history}
      contacts={contacts}
      editContact={editContact} />
    )} />

    //If the URL is "/contacts/:contactId" take the user to the page
    //That displays a single contact
    <Route path="/contacts/:id" render={(routerProps) => (
      <Contact contactId={routerProps.match.params.id}
      history={routerProps.history}
      deleteContact={deleteContact}
      contacts={contacts}
      />
    )} />

    //If the URL is simply 'contacts' take the user to the page
    //Which displays all contacts
    <Route path="/contacts" render={() => (
      //The AllContacts component is handed the contacts array from App.state.contacts
      //As well as the deleteContact function
      <AllContacts contacts={contacts}
      deleteContact={deleteContact}
       />
    )}/>
  </Switch>
)

//Set Contacts PropTypes
Contacts.propTypes = {
  addContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
}

export default Contacts;
