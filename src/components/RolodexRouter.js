import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import ContactsList from './ContactsList';
import { PropTypes } from 'prop-types';
import NewContact from './NewContact';
import EditContact from './EditContact';
import Contact from './Contact';

const RolodexRouter = ({contacts, addContact, editContact, removeContact}) => (
  <Switch>
    //new contact
    <Route path='/contacts/new' render={(props) => (
      <NewContact props={props} addContact={addContact}/>
    )}/>

    //edit contact
    <Route path='/contacts/:id/edit' render={(props) => (
      <EditContact props={props} contacts={contacts} editContact={editContact} />
    )} />

    //show individual contact
    <Route path='/contacts/:id' render={(props) => (
      <Contact props={props} contacts={contacts} />
    )} />

    //show all contacts
    <Route path='/contacts/' render={() => (
      <ContactsList contacts={contacts} removeContact={removeContact} />
    )} />
  </Switch>   
);

RolodexRouter.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func
};

export default RolodexRouter;
