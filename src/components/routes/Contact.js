import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactDetail from '../ContactDetail';
import EditContact from '../EditContact';

const Contact = ({routerProps, contacts, editContact, deleteContact}) => {
  const contact = contacts.find(c => c.id === parseInt(routerProps.match.params.id));

  return (
    <Switch>
      <Route exact path='/contacts/:id' render={routerProps => (
        <ContactDetail routerProps={routerProps} contact={contact} deleteContact={deleteContact} />
      )} />
      <Route path='/contacts/:id/edit' render={routerProps => (
        <EditContact routerProps={routerProps} contact={contact} editContact={editContact} />
      )} />
    </Switch>
  );
};

export default Contact;