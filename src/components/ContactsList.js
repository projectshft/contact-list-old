import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contacts from './Contacts.js';
import NewContact from './NewContact.js'
import ContactDetail from './ContactDetail.js'
import ContactEdit from './ContactEdit.js'
import PropTypes from 'prop-types'

const ContactsList = ({contacts, addContact, updateContact, removeContact}) => (

 <Switch>

    <Route path='/contacts/new' render={(routerProps) => (
      <NewContact history={routerProps.history} contacts={contacts} addContact={addContact} removeContact={removeContact}/>
    )}/>

    <Route path='/contacts/edit/:key' render={(routerProps) => (
      <ContactEdit history={routerProps.history} contactKey={parseInt(routerProps.match.params.key, 10)} contacts={contacts} updateContact={updateContact}/>
    )}/>

    <Route path='/contacts/:key' render={(routerProps) => (
      <ContactDetail contactKey={parseInt(routerProps.match.params.key, 10)} contacts={contacts} />
    )}/>

    <Route path='/contacts' render={() => (
      <Contacts contacts={contacts} removeContact={removeContact}/>
    )}/>

 </Switch>

)

ContactsList.propTypes = {
  contact: PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
  contactKey: PropTypes.number
};

export default ContactsList
