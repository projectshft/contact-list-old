import { Switch, Route, Link } from 'react-router-dom'
import React from 'react';
import ContactDetails from './Contact';
import ContactNew from './ContactNew';
import ContactList from './ContactList';
import ContactEdit from './ContactEdit'


const List = ({contacts, addContact, editContact, deleteContact}) => (
  <div>
      <div className='contact-list'>
          <h1 className='col'>Contacts</h1>
          <Link className='col' to ='/contact/new'><button>Add New Contact</button></Link>
      </div>
      <Switch>
        <Route exact path = '/' render={() => (
           <ContactList contacts={contacts} deleteContact={deleteContact} />
        )}/>
        <Route path='/contact/new' render={(routeProps) => (
          <ContactNew history={routeProps.history} contacts={contacts} addContact={addContact} />
        )}/>
        <Route exact path='/contact/:number' render={(routeProps) => (
          <ContactDetails contactId={parseInt(routeProps.match.params.number, 10)} contacts={contacts} />
        )}/>
        <Route path='/contact/:number/edit' render={(routeProps) => (
          <ContactEdit history={routeProps.history} contactId={parseInt(routeProps.match.params.number, 10)} contacts={contacts} editContact={editContact}/>
        )}/>
        <Route path='/contact' render={() => (
           <ContactList contacts={contacts} deleteContact={deleteContact} />
        )}/>
      </Switch>

  </div>
)

export default List
