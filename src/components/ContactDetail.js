import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const ContactDetail = ({props, contacts}) => {
  const contact = _.find(contacts, { id: parseInt(props.match.params.id, 10) });

  if (!contact) {
    return(
      <div className='contact-detail-error'>
        <h1>Sorry, but that contact was not found</h1>
        <Link to='/contacts'>Back to My Contacts</Link>
      </div>
      )
  }

  return (
    <div className='contact-detail'>
      <img src={contact.image_url}></img>
      <h1>{contact.name}</h1>
      <h2>Phone: {contact.phone_number}</h2>
      <h2>Email: {contact.email}</h2>
      <Link to='/contacts'>Back</Link> | 
      <Link to={`/contacts/${contact.id}/edit`}>Edit</Link>
    </div>
  )
}

export default ContactDetail