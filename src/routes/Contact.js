import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactDetail from '../components/ContactDetail';
import EditContact from '../components/EditContact';

const Contact = ({routerProps, contacts, editContact, deleteContact}) => (
  <Switch>
    <Route exact path='/contacts/:id' render={routerProps => (
      <ContactDetail routerProps={routerProps} contacts={contacts} deleteContact={deleteContact} />
    )} />
    <Route path='/contacts/:id/edit' component={EditContact} render={routerProps => (
      <EditContact routerProps={routerProps} contacts={contacts} editContact={editContact} />
    )} />
  </Switch>
);

export default Contact;