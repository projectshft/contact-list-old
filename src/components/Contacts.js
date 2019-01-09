import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact.js';
import AllContacts from './AllContacts.js';
import ContactNew from './ContactNew.js';


const Contacts = ({ contacts, addContact }) => (
  <Switch> 
  {/* These are the routes that enable us to view contacts and add new contacts.    */}
    <Route exact path='/' render={() => (
      <AllContacts contacts={contacts} />
    )}/>

    <Route path='/contact/new' render={(props) => (
      <ContactNew props={props} contacts={contacts} addContact={addContact} />
    )}/>

      <Route path= '/contact/:id' render={(props) => (
      <Contact props={props} contacts={contacts} />     
    )}/>

      <Route path='/contact' render={(contacts) => (
        <AllContacts contacts={contacts} />
          )}/>
    </Switch>
)

export default Contacts;