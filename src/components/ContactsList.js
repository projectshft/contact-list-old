import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contacts from './Contacts.js';
import NewContact from './NewContact.js'
import ContactDetail from './ContactDetail.js'
import ContactEdit from './ContactEdit.js'
import PropTypes from 'prop-types'

const ContactsList = ({contacts, addContact, updateContact, removeContact}) => (

 <Switch>
    {/* Route path to the new contact page where users can add contacts */}
    <Route path='/contacts/new' render={(routerProps) => (
      <NewContact history={routerProps.history} contacts={contacts} addContact={addContact} removeContact={removeContact}/>
    )}/>
    {/* Route path to the edit contacts page where users can edit contacts */}
    <Route path='/contacts/edit/:key' render={(routerProps) => (
      <ContactEdit history={routerProps.history} contactKey={parseInt(routerProps.match.params.key, 10)} contacts={contacts} updateContact={updateContact}/>
    )}/>
    {/* Route path to the contact detail page where users can see the contacts details */}
    <Route path='/contacts/:key' render={(routerProps) => (
      <ContactDetail contactKey={parseInt(routerProps.match.params.key, 10)} contacts={contacts} />
    )}/>
    {/* Route path to contacts where all of the contacts will be rendered */}
    <Route path='/contacts' render={() => (
      <Contacts contacts={contacts} removeContact={removeContact}/>
    )}/>

 </Switch>

)

// Add proptypes to benefit myself and other devs working on this code in the future
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
