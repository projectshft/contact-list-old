import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Contact from './Contact.js';
import ContactNew from './ContactNew';
import ContactsAll from './ContactsAll';

const Contacts = ({ contacts, addContact }) => (
  <Switch>
    <Route
      path='/contacts/new'
      render={(routerProps) => (
        <ContactNew
          history={routerProps.history}
          contacts={contacts}
          addContact={addContact}
        />
      )}
    />

    <Route
      path='/contacts/:id'
      render={(routerProps) => (
        <Contact
          contactId={parseInt(routerProps.match.params.number, 10)}
          contacts={contacts}
        />
      )}
    />

    <Route
      path='/contacts'
      render={() => <ContactsAll contacts={contacts} />}
    />
  </Switch>
);

export default Contacts;
