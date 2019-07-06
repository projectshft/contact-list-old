import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem'

const ContactList = ({contacts, removeContact}) => (
  <div className='col-md-8 offset-md-2'>
    <div className="jumbotron"><h1>Rolodex</h1></div>
    <div className='contacts-info'>
      <span>
        <h1><em>Total Contacts: {contacts.length}</em></h1>
      </span>
      <Link className='btn btn-secondary btn-lg btn-block align-right' to={`/contacts/new`}>Add Contact</Link>
    </div>
    <ul className='list-group'>
      {contacts.map(contact =>
          <ContactListItem contact={contact} removeContact={removeContact} />
        )}
    </ul>
  </div>
)

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired
}

export default ContactList