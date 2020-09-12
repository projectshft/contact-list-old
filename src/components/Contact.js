// individual contact component within the contact list,
// on click takes us to a contact info page based on that contact /contacts/id:

import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

// create a function that will match a contacts id with it's hyperlink id and onclick will return the correct info ab 
// that contact
const Contact = ({id, contacts}) => {
  const contact = _.find(contacts, { id: id });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (
    <div>
      <h1>{contact.name}</h1>
      <img src={contact.image_url}></img>
      <h2>phone: {contact.phone_number}</h2>
      <h2>email: {contact.email}</h2>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default Contact