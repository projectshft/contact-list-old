import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import AllContacts from './AllContacts.js';
import Contact from './Contact.js';



const Contacts = () => (
  <Switch>
    <Route exact path='/contacts' component={AllContacts}/>
    <Route path='/contacts/:name' component={Contact}/>
  </Switch>
)

export default Contacts;
