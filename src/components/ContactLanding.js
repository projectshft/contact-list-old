import { Switch, Route } from 'react-router-dom'
import React from 'react';
import PropTypes from 'prop-types';
import ContactDetail from './ContactDetail';
import AddContact from './AddContact';
import EditContact from './EditContact';
import ContactList from './ContactList';

//Switch for routing 

const ContactLanding = ({contacts, addContact, editContact, removeContact}) => (
  <Switch>    
    <Route path='/contacts/new' render={(props) => (
      <AddContact props={props} addContact={addContact} />
    )}/>

    <Route path='/contacts/:id/edit' render={(props) => (
      <EditContact props={props} contacts={contacts} editContact={editContact} />
    )}/>

    <Route path='/contacts/:id' render={(props) => (
      <ContactDetail props={props} contacts={contacts}/>
    )}/>
    
    <Route path='/contacts' render={() => (
      <ContactList contacts={contacts}  removeContact={removeContact} />
    )}/>
  </Switch>
)

ContactLanding.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired
};

export default ContactLanding