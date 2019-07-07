import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact';
import ContactNew from './ContactNew';
import FullList from './FullList';

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
