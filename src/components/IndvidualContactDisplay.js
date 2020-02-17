import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const IndividualContactDisplay = ({contactId, contacts}) => {

  //Finding the contact that matches the selected or searched id.
  const contact = _.find(contacts, { id: contactId });
  
  //if no contact is found, page will render this message.
  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }

  return (
    <div>
      <h1 className="text-capitalize contact">{contact.name}</h1>
      <h3>Phone Number: {contact.phoneNumber}</h3>
      <h3>Email: {contact.email}</h3>
      <img src={contact.img_url} />
      <br />
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default IndividualContactDisplay
