import { Switch, Route, Link } from 'react-router-dom'
import React from 'react';
import FullContactList from './FullContactList.js'
import ContactInfo from './ContactInfo.js'

//component for rendering all contacts in the app's list of contacts
const Contact = ({contacts}) => (
  <div>
    <Switch>
    {/* creating a route for each contact to link to it's respective ContactInfo */}
    <Route path='/contacts/:number' render={(routerProps) => (
      <ContactInfo contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
    )}/>
    {/* rendering the full contact list in App.js */}
    <Route path='/contacts' render={() => (
      //passing contacts props to FullContact List
      <FullContactList contacts={contacts} />
    )}/>
    </Switch>
  </div>
    
)

export default Contact;