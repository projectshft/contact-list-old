import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './contact';
import ContactNew from './contactNew';
import ContactEdit from './contactEdit';

const Contacts = ({contacts, addContact, updateContact}) => (

  <Switch>
  <div>
    <h1>Contact List</h1>
    <button> Add to Contacts </button>
  </div>
      <Route path='/contacts/new' render={(routerProps) => (
        <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
      )}/>

      <Route path='/contacts/:number/edit' render={(routerProps) => (
        <ContactEdit history={routerProps.history} contactId={parseInt(routerProps.match.params.number, 10)} contacts={contacts} updateContact={updateContact} />
      )}/>

      <Route path='/contacts/:number' render={(routerProps) => (
        <Contact contactId={parseInt(routerProps.match.params.number, 10)} contacts={contacts} />
      )}/>

    </Switch>

)

export default Contacts
