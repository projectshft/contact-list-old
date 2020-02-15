import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

const ContactListItem = ({contact, removeContact}) => (
  <li key={contact.id} className='list-group-item'>
    <img className="float-left"
      src={contact.image_url} alt='contact related view'>
    </img>
    <Link to={`/contacts/${contact.id}/edit`} className='align-middle'><h4>{contact.name}</h4></Link>
    <span className='float-right'>
      <Link className='btn btn-info btn-xs edit-button' to={`/contacts/${contact.id}/edit`}>Edit</Link>|
      <button className='btn btn-danger btn-xs remove-button'
        onClick={e => removeContact(contact.id)}
      >
        Delete
      </button>
    </span>
  </li>
)

ContactListItem.propTypes = {
  removeContact: PropTypes.func.isRequired
};

export default ContactListItem