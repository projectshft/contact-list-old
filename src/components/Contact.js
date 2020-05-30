import { Switch, Route } from 'react-router-dom'
import React from 'react'
import ContactInner from './ContactInfo'
import FullContactsList from './FullContactsList'

const Contact = ({contacts}) => (
  <Switch>
    <Route path='/contacts/:id' render={(routerProps) => (
      <ContactInfo contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
    )}/>

    <Route path='/contacts' render={() => (
      <div>
        <FullContactsList contacts={contacts} />
      </div>
    )}/>
  </Switch>
)

export default Contact
