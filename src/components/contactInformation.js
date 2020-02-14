import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import uuid from 'uuid/v4'

const ContactInformation = ({contactId, contacts}) => {

  const contact = _.find(contacts, { id: contactId });

  console.log(contact);
  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (

    <div>
      <h1>{contact.name}</h1>
      <img src = {contact.image_url}></img>
      <h4>{contact.email}</h4>
      <h4>{contact.phone}</h4>
      <div><Link to='/contacts'>Back To Contact List</Link></div>
      <div><Link to={`/contacts/${contact.id}/edit`}>Edit</Link></div>
    </div>
  )
}

export default ContactInformation
