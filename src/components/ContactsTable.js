import React from 'react'
import ContactsRow from './ContactsRow'
import PropTypes from 'prop-types';

const ContactsTable = ({contacts}) => {
  return (
    <tbody>
      {contacts.map(contact => {
          return (
            <ContactsRow key={contact.id} contact={contact}/>
          )
      })}
    </tbody>
  )
}

ContactsTable.proptypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.required
  })),
};

export default ContactsTable
