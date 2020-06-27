import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Person from './Person';
import ContactNew from './ContactNew';
import ContactList from './ContactList';

const Contacts = ({contacts, addPerson}) => (

    //Creating routes for new contact form and individual contact pages by contact id.
    
  <Switch>
    <Route path='/contacts/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addPerson={addPerson} />
    )}/>

    <Route path='/contacts/:id' render={(routerProps) => (
      <Person personId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
    )}/>

    <Route path='/' render={() => (
      <ContactList contacts={contacts} />
    )}/>
  </Switch>
)
 export default Contacts;