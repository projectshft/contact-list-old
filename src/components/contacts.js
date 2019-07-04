import { Switch, Route } from 'react-router-dom'
import React from 'react';
import FullContactList from './FullContactList'
import IndividualContact from './IndividualContact'
import CreateContact from './CreateContact'


const Contacts = ({addContact, contactList}) => (
  <Switch>
  //if route is /contacts/new the from to create  a new contact is rendered
    <Route path='/contacts/new' render={(props) => (
      <CreateContact props={props} contactList={contactList} addContact={addContact} />
    )}/>
  //if route is contacts/(contact id) the invidual contact is rendered
    <Route path='/contacts/:id' render={(props) => (
      <IndividualContact props={props} contactList={contactList} />
    )}/>
//if route is /contacts the full contact list is shown on the page
    <Route path='/contacts' render={() => (
      <FullContactList contactList={contactList} />
    )}/>
  </Switch>
)
export default Contacts
