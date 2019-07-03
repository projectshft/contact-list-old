import { Switch, Route } from 'react-router-dom'
import React from 'react';
import ContactDetail from './ContactDetail';
import AddContact from './AddContact';
import ContactList from './ContactList';

const ContactLanding = ({contacts, addContact}) => (
  <Switch>    
    <Route path='/contacts/new' render={(props) => (
      <AddContact props={props} contacts={contacts} addContact={addContact} />
    )}/>

    <Route path='/contacts/:id/edit' render={(props) => (
      <EditContact props={props} contacts={contacts} editContact={editContact} />
    )}/>

    <Route path='/contacts/:id' render={(props) => (
      <ContactDetail props={props} contacts={contacts} />
    )}/>
    
    <Route path='/contacts' render={() => (
      <ContactList contacts={contacts} />
    )}/>
  </Switch>
)

export default ContactLanding