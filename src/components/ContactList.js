import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contacts from './Contacts';
import ContactView from './ContactView'


const ContactList = ({contacts}) => (
  <Switch>

    <Route path='/contacts/:id' render={(props) => (
      <ContactView props={props} contacts={contacts} />
    )}/>

    <Route exact path='/' render={() => (
      <Contacts contacts={contacts} />
    )}/>


  </Switch>
)

export default ContactList
