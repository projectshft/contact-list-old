import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact';
import Contacts from './Contacts';
import AddContact from './AddContact';

const ContactNav = ({contacts, addContact, removeContact}) => (
  <Switch>
    <Route exact path='/contacts' render={() => (
      <Contacts contacts={contacts} />
    )}/>
    <Route path='/contacts/add' render={(props) => (
      <AddContact props={props} contacts={contacts} addContact={addContact} />
    )}/>
    <Route path='/contacts/:number' render={(props) => (
      <Contact props={props} contacts={contacts} removeContact={removeContact}/>
    )}/>
  </Switch>
)

export default ContactNav
