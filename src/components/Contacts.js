import { Switch, Route } from 'react-router-dom'
import React from 'react';
import AllContacts from "./AllContacts.js"
import EditContact from "./EditContact.js"
import NewContact from "./NewContact.js"
import Contact from "./Contact.js"
import PropTypes from 'prop-types';


const Contacts = ({addContact, editContact, contacts, deleteContact}) => (
  <Switch>
    <Route path='/contacts/new' render={(routerProps) => (
      <NewContact history={routerProps.history}
      contacts={contacts}
      addContact={addContact} />
    )}/>

    <Route path="/contacts/:id/edit" render={(routerProps) => (
      <EditContact contactId={routerProps.match.params.id}
      history={routerProps.history}
      contacts={contacts}
      editContact={editContact} />
    )} />

    <Route path="/contacts/:id" render={(routerProps) => (
      <Contact contactId={routerProps.match.params.id}
      history={routerProps.history}
      deleteContact={deleteContact}
      contacts={contacts}
      />
    )} />

    <Route path="/contacts" render={() => (
      <AllContacts contacts={contacts}
      deleteContact={deleteContact}
       />
    )}/>
  </Switch>
)

Contacts.propTypes = {
  addContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
}

export default Contacts;
