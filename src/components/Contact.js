import { Switch, Route } from 'react-router-dom'
import React from 'react'
import ContactInfo from './ContactInfo'
import FullContactsList from './FullContactsList'
import ContactNew from './ContactNew'

const Contact = ({contacts, addContact}) => (
  <Switch>

    <Route path='/contacts/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
    )}/>

    
    <Route path='/contacts/:id' render={(routerProps) => (
      <ContactInfo contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
    )}/>



    <Route path='/' render={() => (
      <div>
        <FullContactsList contacts={contacts} />
      </div>
    )}/>

  </Switch>
)

export default Contact
