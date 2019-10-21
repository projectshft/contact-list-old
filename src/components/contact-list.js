import { Switch } from 'react-router-dom'
import React from 'react'
import NewContact from './new-contact'
import Contact from './contact'

const ContactList = ({contacts, addContact}) => (
  <Switch>    
    <Route path='/contacts/new' render={(props) => (
      <NewContact props={props} contacts={contacts} addContact={addContact} />
    )}/>
  
    <Route path='/contacts/:id' render={(props) => (
      <Contact props={props} contacts={contacts} />
    )}/>
  </Switch>
)

export default ContactList
