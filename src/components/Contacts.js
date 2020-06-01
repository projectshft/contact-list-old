import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact';
import ContactNew from './ContactNew';
import AllContacts from './AllContacts';

// This router contains three paths
const Contacts = ({contacts, addContact}) => (
  <Switch>

    // Goes to new contact page. contacts and addContact are passed in as
    // custom props, along with history, from App
    <Route path='/contacts/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
    )}/>

    // Renders an individual routed on unique contactId. Also receives contacts as a prop
    <Route path='/contacts/:id' render={(routerProps) => (
      <Contact contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
    )}/>

    // The "home page".
    <Route path='/contacts' render={() => (
      <AllContacts contacts={contacts} />
    )}/>
  </Switch>
)

export default Contacts
