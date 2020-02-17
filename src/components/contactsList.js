import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contacts from './contacts'
import ContactNew from './contactNew'
import ContactDetail from './contactDetail'
import ContactEdit from './contactEdit'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

//ContactList is a stateless Component which contains all the nested routes and passes props and router props
const ContactsList = ({contacts, addContact, updateContact, deleteContact}) => (

    //Switches between four routes contacts/new, /contacts/:id/edit, /contacts/:id and /contacts
  <Switch>

    <Route path='/contacts/new' render={(routerProps) => (
      <ContactNew history = {routerProps.history} contacts={contacts} addContact={addContact} />
      )}/>

    <Route path='/contacts/:id/edit' render={(routerProps) => (
      <ContactEdit history={routerProps.history} contactId={(routerProps.match.params.id)} contacts={contacts} updateContact={updateContact} />
        )}/>

    <Route path='/contacts/:id' render={(routerProps) => (
      <ContactDetail contactId={(routerProps.match.params.id)} contacts={contacts} />
      )}/>

    <Route path ='/contacts' render={() => (
      <Contacts contacts ={contacts} deleteContact={deleteContact} addContact={addContact} updateContact={updateContact} />
      )}/>

  </Switch>

)


//PropTypes required
ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired
  }),
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}

export default ContactsList
