import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './contact';
import NewContactForm from './new_contact_form';
import ContactsList from './contacts_list';

const Contacts = ({contacts, addContact, deleteContact}) => (
  <Switch>
    <Route path='/contacts/new' render={(props) => (
      <NewContactForm props={props} contacts={contacts} addContact={addContact} />
    )}/>

    <Route path='/contacts/:id=' render={(props) => (
      <Contact props= {props} contacts={contacts} />
    )}/>

    <Route path='/contacts/list' render={(props) => (
      <ContactsList contacts={contacts} deleteContact={deleteContact}/>
    )}/>

  </Switch>
)

export default Contacts
