import { Switch, Route } from 'react-router-dom'
import React from 'react';
import ContactDetail from './ContactDetail';
import AddContact from './AddContact';
import ContactList from './ContactList';

const ContactLanding = ({contacts, addContact}) => (
  <Switch>    
    <Route path='/contacts/new' render={(props) => (
      <AddContact props={props} players={players} addContact={addContact} />
    )}/>
  
    <Route path='/contacts/:id' render={(props) => (
      <ContactDetail props={props} players={players} />
    )}/>
    
    <Route path='/contacts' render={() => (
      <ContactList contacts={contacts} />
    )}/>
  </Switch>
)

export default ContactLanding