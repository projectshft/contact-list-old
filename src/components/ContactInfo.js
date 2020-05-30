import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const ContactInfo = ({contactId, contacts}) => {
  const contact = _.find(contacts, { id: contactId });

  if(!contact) {
    alert('contact does not exist');
  }
  return (
    <div>
      <h1>{contact.name}</h1>
      <h2>{contact.phone_number}</h2>
      <h2>{contact.email}</h2>
      <img src={contact.img_url}/>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default ContactInfo
