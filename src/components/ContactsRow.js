import React from 'react'
import StyledLink from './StyledLink.js'

const ContactsRow = ({contacts}) => {

    return (
      contacts.map( contact => (
        <tr key={contact.id}>
          <td><StyledLink to={`/contacts/${contact.id}`}>{contact.name}</StyledLink></td>
          <td><a className="edit " tabIndex='0'>edit</a></td>
          <td><a className="delete" tabIndex='0'>delete</a></td>
        </tr>
      ))
    )
}

export default ContactsRow
