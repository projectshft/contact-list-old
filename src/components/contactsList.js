import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contacts from './contacts'
import ContactNew from './contactNew'
import ContactDetail from './contactDetail'
import ContactEdit from './contactEdit'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';


const ContactsList = ({contacts, addContact, updateContact, deleteContact}) => (


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

export default ContactsList

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}
