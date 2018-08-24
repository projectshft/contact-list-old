import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact';
import ContactNew from './ContactNew';
import AllContacts from './AllContacts';

const Contacts = ({contacts, addContact}) => (
  <Switch>
    <Route path='/contacts/new' render={(props) => (
      <ContactNew props={props} contacts={contacts} addContact={addContact} />
    )}/>

    <Route path='/AllTest/:name' render={(props) => (
      <Contact props={props} contacts={contacts} />
    )}/>

    <Route path='/Contacts' render={() => (
      <AllContacts contacts={contacts} />
    )}/>
  </Switch>
)

export default Contacts
