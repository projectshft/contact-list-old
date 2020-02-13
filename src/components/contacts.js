import { Switch, Route, Link } from 'react-router-dom'
import React from 'react';
import ContactInformation from './contactInformation';
import ContactNew from './contactNew';
import ContactEdit from './contactEdit';
import ContactList from './contactList'

const Contacts = ({contacts, addContact, updateContact}) => (

  <Switch>
  <div>
    <h1>Contact List</h1>
     <Link to ='/contacts/new'><button type="button" onClick={this.addContact}> Add to Contacts </button> </Link>

      <Route path='/contacts/new' render={(routerProps) => (
        <ContactNew  history = {routerProps.history} contacts={contacts} addContact={addContact} />
      )}/>

      <Route path='/contacts/:id/edit' render={(routerProps) => (
        <ContactEdit history={routerProps.history} contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} updateContact={updateContact} />
      )}/>

      <Route path='/contacts/:id' render={(routerProps) => (
        <ContactInformation history = {routerProps.history} contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
      )}/>
</div>
    </Switch>

)

export default Contacts
