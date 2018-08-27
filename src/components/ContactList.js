import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contacts from './Contacts';
import ContactView from './ContactView'


const ContactList = ({contacts, deleteContact}) => (
  <Switch>

    <Route path='/contacts/:id' render={(props) => (
      <ContactView props={props} contacts={contacts} deleteContact={deleteContact} />
    )}/>

    <Route exact path='/' render={() => (
      <Contacts contacts={contacts} />
    )}/>


  </Switch>
)

export default ContactList
