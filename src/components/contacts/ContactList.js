/******************************
   A class-based component for the contact list, to hold the state of all the individual contacts. (An object that has individual contacts with the id, name, image, email, and phone number for each.)
   Loop through the individual contact components and output a specific individual contact component for each entry in the list.  
   * ***************************/
import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class ContactList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">Contacts</h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default ContactList;
