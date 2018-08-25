import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './contact';
import NewContactForm from './new_contact_form';
import ContactsList from './contacts_list';
import Home from './Home';


const Contacts = ({contacts, addContact, deleteContact, showContactDetail}) => (
  <Switch>

    <Route path='/contacts/new' render={(props) => (
      <NewContactForm props={props} contacts={contacts} addContact={addContact} />
    )}/>

    <Route path='/contacts/:id=' render={(props) => (
      <Contact props= {props} contacts={contacts} showContactDetail={showContactDetail} />
    )}/>

    <Route path='/contacts' render={(props) => (
      <ContactsList contacts={contacts}
      deleteContact={deleteContact}
      showContactDetail={showContactDetail}/>
    )}/>

  </Switch>
)

export default Contacts
