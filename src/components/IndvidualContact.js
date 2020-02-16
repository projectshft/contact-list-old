import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const IndividualContact = ({contactId, contacts}) => {

  const contact = _.find(contacts, { id: contactId });
  console.log(contact)

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (
    <div>
      <h1>{contact.name}</h1>
      <h2>Phone Number: {contact.phoneNumber}</h2>
      <h2>Email: {contact.email}</h2>
      <img src={contact.img_url} />
      <br />
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default IndividualContact
