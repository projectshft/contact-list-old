import { Switch, Route, Link } from 'react-router-dom'
import React from 'react';
import FullContactList from './FullContactList.js'
import ContactInfo from './ContactInfo.js'

const Contact = ({contacts}) => (
  <div>
    <Switch>
    
    <Route path='/contacts/:number' render={(routerProps) => (
      <ContactInfo contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
    )}/>

    <Route path='/contacts' render={() => (
      <FullContactList contacts={contacts} />
    )}/>
    </Switch>
  </div>
    
)

export default Contact;