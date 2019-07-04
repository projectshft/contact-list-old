import { Switch, Route } from 'react-router-dom'
import React from 'react';
import FullContactList from './FullContactList'
import IndividualContact from './IndividualContact'
import CreateContact from './CreateContact'


const Contacts = (addContact, contactList) => (
  <Switch>
    <Route path='/contacts/new' render={(props) => (
      <CreateContact props={props} contactList={contactList} addContact={addContact} />
    )}/>

    <Route path='/contacts/:id' render={(props) => (
      <IndividualContact props={props} contactList={contactList} />
    )}/>

    <Route path='/contacts' render={() => (
      <FullContactList contactList={contactList} />
    )}/>
  </Switch>
)
export default Contacts
