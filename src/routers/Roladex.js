import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from '../components/Contact';
import ContactNew from '../components/ContactNew';
import FullList from '../components/FullList';

// set route paths with nested prop funcs for new contacts form (ContactNew), contact details (Contact), and contact list(FullList)
const Roladex = ({contacts, addContact}) => (
  <Switch>
    <Route path='/roladex/new' render={(props) => (
      <ContactNew props={props} contacts={contacts} addContact={addContact} />
    )}/>

    <Route path='/roladex/:id' render={(props) => (
      <Contact props={props} contacts={contacts} />
    )}/>

    <Route path='/roladex' render={() => (
      <FullList contacts={contacts} />
    )}/>
  </Switch>
)

export default Roladex
