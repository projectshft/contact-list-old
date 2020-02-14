import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contacts from './contacts'
import ContactNew from './contactNew'
import ContactInformation from './contactInformation'
import ContactEdit from './contactEdit'
import 'bootstrap/dist/css/bootstrap.css';


const ContactList = ({contacts, addContact, updateContact}) => (


    <Switch>

        <Route path='/contacts/new' render={(routerProps) => (
          <ContactNew history = {routerProps.history} contacts={contacts} addContact={addContact} />
          )}/>


        <Route path='/contacts/:id' render={(routerProps) => (
          <ContactInformation contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
          )}/>

          <Route path='/contacts/:id/edit' render={(routerProps) => (
              <ContactEdit history={routerProps.history} contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} updateContact={updateContact} />
              )}/>


          <Route path ='/contacts' render={() => (
            <Contacts contacts ={contacts} />
          )}/>

      </Switch>

)

export default ContactList
