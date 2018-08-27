import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Contact from './Contact'
import AddContact from './AddContact'
import FullContactList from './FullContactList'

const ContactList = ({contacts, addContact}) => (
  <Switch>
    <Route path='/contact/new' render={(props) => (
      <AddContact props={props} contacts={contacts} addContact={addContact} />
    )}/>

    <Route path='/contactList/:id' render={(props) => (
      <Contact props={props} contacts={contacts} />
    )}/>

    <Route path='/contactList' render={(props) => (
      <FullContactList contacts={contacts} />
    )}/>
  </Switch>
)

export default ContactList
