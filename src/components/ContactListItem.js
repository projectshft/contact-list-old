import React from 'react';
import { sendEvent } from '../state';

const ContactListItem = ({contact}) => {
  const contactURL = `/contacts/${contact.id}`
  return (
    <li>
    <img className = "contact-image" alt={contact.name} src={contact.image_url}></img>
    <a href = {contactURL}>{contact.name}</a>
    <button type="button" className = "btn btn-primary" onClick={() => sendEvent("deleteContact",contact)}>Delete Contact</button>
    </li>
  )
}

export default ContactListItem
