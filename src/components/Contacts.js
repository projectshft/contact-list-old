import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact';
import ContactNew from './ContactNew';
import AllContacts from './AllContacts';

const Contacts = ({contacts, addContact}) => (
  <Switch>
    <Route path='/contacts/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
    )}/>

    <Route path='/contacts/:id' render={(routerProps) => (
      <Contact contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
    )}/>

    <Route path='/contacts' render={() => (
      <AllContacts contacts={contacts} />
    )}/>
  </Switch>
)

export default Contacts
