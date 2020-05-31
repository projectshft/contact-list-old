import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact';
import NewContact from './NewContact';
import Contacts from './Contacts';
import PropTypes from 'prop-types';

//Inherits contacts and addContacts from parent comonent App.
//routerProps.history sends the memory history to all routes
//routerProps.match matches the url path based on the provided parameters (id)
const ContactRoutes = ({contacts, addContact, deleteContact}) => (
  <Switch>{/*Path to NewContent passing past properties */}
    <Route path='/contacts/new' render={(routerProps) => (
      <NewContact history={routerProps.history} contacts={contacts} addContact={addContact} />
    )}/>

    {/*Path to individual Content by finding individual id parameter (and making sure its a numeric value and not a string)
      passes contacts properties to Contact*/}
    <Route path='/contacts/:id' render={(routerProps) => (
      <Contact contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
    )}/>

    {/*creates route to Contacts list and passes contact proprties */}
    <Route path='/contacts' render={() => (
      <Contacts contacts={contacts} deleteContact={deleteContact}/>
    )}/>
    <Route path='/' render={() => (
      <Contacts contacts={contacts} deleteContact={deleteContact}/>
    )}/>
  </Switch>
)

ContactRoutes.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
}

export default ContactRoutes;
