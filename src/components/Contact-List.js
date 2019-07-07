import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact';
import ContactNew from './ContactNew';
import FullList from './FullList';

const ContactList = ({contacts, addContact}) => (
  <Switch>
    <Route path='/ContactList/new' render={(props) => (
      <ContactNew props={props} contacts={contacts} addContact={addContact} />
    )}/>

    <Route path='/ContactList/:id' render={(props) => (
      <Contact props={props} contacts={contacts} />
    )}/>

    <Route path='/ContactList' render={() => (
      <FullList contacts={contacts} />
    )}/>
  </Switch>
)

export default ContactList
