import { Switch, Route } from 'react-router-dom';
import React from 'react';
import ContactItem from './ContactItem';
import ContactNew from './ContactNew';
import AllContactList from './AllContactList';
import PropTypes from 'prop-types';

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
      render={() => <ContactItem contactId={contacts.id} contacts={contacts} />}
    />

    <Route
      path='/contacts'
      render={() => <AllContactList contacts={contacts} />}
    />
  </Switch>

);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Contacts;
