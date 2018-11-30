import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactDetail from '../components/ContactDetail';
import EditContact from '../components/EditContact';

const Contact = () => (
  <Switch>
    <Route exact path='/contacts/:id' component={ContactDetail}></Route>
    <Route path='/contacts/:id/edit' component={EditContact}></Route>
  </Switch>
);

export default Contact;