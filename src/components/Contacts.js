import { Switch, Route } from 'react-router-dom';
import React from 'react';
import ContactItem from './ContactItem';
import ContactNew from './ContactNew';
import AllContactList from './AllContactList';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, addContact, editContact, deleteContact }) => {
  //Define a series of nested routing paths from ./contacts.
  //Each Route delivers props if needed (as 'render={(routerProps)})
  //and sends props to components as listed below the component name.
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
            contactId={Number(routerProps.match.params.id)}
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
      {/* to replicate what appears on the /contacts page */}
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
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};
Contacts.propTypes = {
  addContact: PropTypes.string.isRequired
};
Contacts.propTypes = {
  editContact: PropTypes.string.isRequired
};
Contacts.propTypes = {
  deleteContact: PropTypes.string.isRequired
};

export default Contacts;
