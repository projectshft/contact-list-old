import { render } from 'react-dom';
import { Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Contact from './Contact.js';
import ContactAPI from './ContactAPI.js';
import AllContacts from './AllContacts.js';
import ContactNew from './ContactNew.js';

const Contacts = ({contacts, addContact}) => (
  <Switch>

    <Route exact path='/' render={() => (
      <AllContacts contacts={contacts} />
    )}/>

    <Route path='/contact/new' render={(props) => (
      <ContactNew props={props} contacts={contacts} addContact={addContact} />
    )}/>

    <Route path='/contact/:id' render={(props) => (
      <Contact props={props} contacts={contacts} />
    )}/>

    <Route path='/contacts' render={() => (
      <AllContacts contacts={contacts} />
    )}/>
  </Switch>
)

export default Contacts;
