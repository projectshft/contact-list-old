import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
import blank_contact from '../blank_profile_male.jpg'

const ContactListItem = ({contact, removeContact}) => (
  <li key={contact.id} className='list-group-item'>
    <img className="float-left"
      src={contact.image_url === '' ? blank_contact: contact.image_url} alt='contact related view'>
    </img>
    <Link to={`/contacts/${contact.id}`} className='align-middle'><h4>{contact.name}</h4></Link>
    <span className='float-right'>
      <Link className='btn btn-outline-info btn-md' to={`/contacts/${contact.id}/edit`}>Edit</Link>|
      <button className='btn btn-outline-danger btn-md' onClick={e => removeContact(contact.id)}>
        Delete
      </button>
    </span>
  </li>
);

ContactListItem.propTypes = {
  removeContact: PropTypes.func.isRequired
};

export default ContactListItem