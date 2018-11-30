import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactList from '../components/ContactList';
import ContactRoutes from './ContactRoutes';
import NewContact from '../components/NewContact';

const Contacts = () => (
  <Switch>
    <Route exact path='/contacts' component={ContactList}></Route>
    <Route path='/contacts/new' component={NewContact}></Route>
    <Route path='/contacts/:id' component={ContactRoutes}></Route>
  </Switch>
);

export default Contacts;