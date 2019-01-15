import { Switch, Route } from 'react-router-dom'
import React from 'react';
import ContactDetails from './ContactDetails';
import FullContactList from './FullContactList';

const Contacts = ({contacts}) => (
  <Switch>    
  
    {/* <Route exact path='contact/:id' render={(props) => (
      <ContactDetails props={props} contacts={contacts} />
    )}/> */}
    
    <Route path='/contacts' render={() => (
      <FullContactList contacts={contacts} />
    )}/>

  </Switch>
)

export default Contacts