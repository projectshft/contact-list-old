import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import ContactItem from './ContactItem';
import ContactNew from './ContactNew';
import AllContactList from './AllContactList';
import PropTypes from 'prop-types';

const Contacts = ({contacts, addContact, editContact, deleteContact}) => {
 

      return (
      <div>
        <div className='inheritances'>
        <AllContactList
          key={this.props.contact.id}
          contact={this.props.contact}
          editContact={this.props.editContact}
          deleteContact={this.props.deleteContact}
        />
        </div>
        <div>
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
                contactId={parseInt(routerProps.match.params.number, 10)}
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
          </div>
      </div>
    );
  }


Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Contacts;

// render() {
//   return this.props.contacts.map((contact) => (
//     <AllContactList
//       key={contact.id}
//       contact={contact}
//       editContact={this.editContact}
//       deleteContact={this.deleteContact}
//     />
//   ));
// }
