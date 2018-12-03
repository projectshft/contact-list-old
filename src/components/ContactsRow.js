import React from 'react'
import StyledLink from './StyledLink.js'
import PropTypes from 'prop-types';

const ContactsRow = ({contact, removeContact}) => {

    return (
        <tr>
          <td><StyledLink to={`/contacts/${contact.id}`}>{contact.name}</StyledLink></td>
          <td><a className="edit " tabIndex='0' data-id={contact.id}>edit</a></td>
          <td><a className="delete" onClick={() => removeContact(contact.id)} tabIndex='0'>delete</a></td>
        </tr>
    )
}

ContactsRow.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
};

export default ContactsRow
