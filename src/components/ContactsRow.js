import React from 'react'
import StyledLink from './StyledLink.js'
import PropTypes from 'prop-types';

const ContactsRow = ({contact}) => {

  return (
      <tr>
        <td><StyledLink to={`/contacts/${contact.id}`}>{contact.name}</StyledLink></td>
        <td><a className="edit " tabIndex='0'>edit</a></td>
        <td><a className="delete" tabIndex='0'>delete</a></td>
      </tr>
  )
}

ContactsRow.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.required,
    name: PropTypes.string.required
  })
};

export default ContactsRow
