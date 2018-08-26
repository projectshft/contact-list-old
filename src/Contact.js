import { Switch, Route } from 'react-router-dom'
import React from 'react';
import IndividualPage from './IndividualPage'
import newContact from './Add'
import Contacts from './Contacts'

const Contact = ({contactList, addContact, newContact}) => (
  <Switch>
    <Route path='/Add' render={(props) => (
      <newContact props={props} contactList={contactList} addContact={addContact} />
    )}/>

    <Route path='/Contacts/:Id' render={(props) => (
      <IndividualPage props={props} contactList={contactList} />
    )}/>

    <Route path='/Contacts' render={() => (
      <Contacts contactList={contactList} />
    )}/>
  </Switch>
)

export default Contact
