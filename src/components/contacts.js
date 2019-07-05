import { Switch, Route } from 'react-router-dom'
import React from 'react';
import FullContactList from './FullContactList'
import IndividualContact from './IndividualContact'
import CreateContact from './CreateContact'
import PropTypes from 'prop-types'




const Contacts = ({addContact, contactList, deleteContact}) => (
  <Switch>
  //if route is /contacts/new the from to create  a new contact is rendered
    <Route path='/contacts/new' render={(props) => (
      <CreateContact props={props} contactList={contactList} addContact={addContact} />
    )}/>
  //if route is contacts/(contact id) the invidual contact is rendered
    <Route path='/contacts/:key' render={(props) => (
      <IndividualContact props={props} contactList={contactList} />
    )}/>
//if route is /contacts the full contact list is shown on the page
    <Route path='/contacts' render={() => (
      <FullContactList contactList={contactList} deleteContact ={deleteContact} />
    )}/>
  </Switch>
)

CreateContact.propTypes = {
  addContact: PropTypes.func.isRequired,
  contactList: PropTypes.array.isRequired
}

IndividualContact.propTypes = {
    contactList: PropTypes.array.isRequired
}

FullContactList.propTypes = {
  contactList: PropTypes.array.isRequired
}


export default Contacts
