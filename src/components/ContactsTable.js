import React from 'react'
import ContactsRow from './ContactsRow'
import PropTypes from 'prop-types';

/*
 This component should simply render the table whereby all the contacts are rendered within.
*/

const ContactsTable = ({contacts, removeContact}) => {
  return (
    <tbody>
      {contacts.map(contact => {
          return (
            <ContactsRow key={contact.id} contact={contact} removeContact={removeContact}/>
          )
      })}
    </tbody>
  )
}

ContactsTable.proptypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })),
};

export default ContactsTable
