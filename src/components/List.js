import { Switch, Route, Link } from 'react-router-dom'
import React from 'react';
import ContactDetails from './Contact';
import ContactNew from './ContactNew';
import ContactList from './ContactList'


const List = ({contacts, addContact}) => (
  <div>
      <Link to ='/contact/new'>Add New Contact</Link>
      <Switch>
        <Route exact path = '/' render={() => (
           <ContactList contacts={contacts} />
        )}/>
        <Route path='/contact/new' render={(routeProps) => (
          <ContactNew history={routeProps.history} contacts={contacts} addContact={addContact} />
        )}/>

        <Route path='/contact/:number' render={(routeProps) => (
          <ContactDetails contactId={parseInt(routeProps.match.params.number, 10)} contacts={contacts} />
        )}/>


        <Route path='/contact' render={() => (
           <ContactList contacts={contacts} />
        )}/>
      </Switch>

  </div>
)

export default List
