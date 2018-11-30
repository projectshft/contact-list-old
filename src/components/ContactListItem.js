import React from 'react';
import { Link } from 'react-router-dom'
import { sendEvent, forceUpdate} from '../state';

const ContactListItem = ({contact}) => {
  const contactURL = `/contacts/${contact.id}`;

  return (
    <li>
    <img className = "contact-image" alt={contact.name} src={contact.image_url}></img>
    <Link to={contactURL} onClick={() => sendEvent('setSelectedContact', contact)}>{contact.name}</Link>
    <button type="button" className = "btn btn-primary" onClick={() => sendEvent("deleteContact",contact)}>Delete Contact</button>
    </li>
  )
}

export default ContactListItem
