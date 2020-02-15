import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return <div>Sorry, but that contact was not found</div>
  }
  return (
    <div>
      <h1>{contact.name}</h1>
      <h2>Phone Number: {contact.phone}</h2>
      <h2>Email: {contact.email}</h2>
      <h2>Image: <img src={contact.url}></img></h2>
      <Link to='/contact'>Back</Link>
    </div>
  )
}

export default Contact
