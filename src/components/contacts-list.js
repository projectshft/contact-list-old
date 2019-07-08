import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './contact';
import ContactForm from './contact-form';
import AllContacts from './all-contacts';


const ContactsList = ({contacts, addContact}) => (
  <Switch>
  //Route to add a new contact
    <Route path='/contacts-list/new' render={(props) => (
      <ContactForm props={props} contacts={contacts} addContact={addContact} />
    )}/>
  //Route to each generated ID for my contacts
    <Route path='/contacts-list/:id' render={(props) => (
      <Contact props={props} contacts={contacts} />
    )}/>

    //At the default URL generates all my contacts
    <Route path='/contacts-list' render={() => (
      <AllContacts contacts={contacts} />
    )}/>
  </Switch>
)

export default ContactsList
