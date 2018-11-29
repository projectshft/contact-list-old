import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactList from './ContactList';
import Contact from './Contact';
import NewContact from './NewContact';

const Contacts = () => (
  <Switch>
    <Route exact path='/contacts' component={ContactList}></Route>
    <Route path='/contacts/new' component={NewContact}></Route>
    <Route path='/contacts/:id' component={Contact}></Route>
  </Switch>
);

export default Contacts;