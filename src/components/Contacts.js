import { Switch, Route } from 'react-router-dom';
import React from 'react';
import ContactItem from './ContactItem';
import ContactNew from './ContactNew';
import AllContactList from './AllContactList';
//import PropTypes from 'prop-types';

const Contacts = ({ contacts, addContact, editContact, deleteContact }) => {
  
  
return (
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
        <ContactItem
          history={routerProps.history}
          // contactId={parseInt(routerProps.match.params.number, 10)}
          contacts={contacts}
        />
      )}
    />

    <Route
      path='/contacts'
      render={() => (
        <AllContactList
          contacts={contacts}
          editContact={editContact}
          deleteContact={deleteContact}
        />
      )}
    />
    <Route
      path='/'
      render={() => (
        <AllContactList
          contacts={contacts}
          editContact={editContact}
          deleteContact={deleteContact}
        />
      )}
    />
    </Switch>
)
}

// Contacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };

export default Contacts;

