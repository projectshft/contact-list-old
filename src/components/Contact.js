import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, { id: contactId });
  console.log(contacts)

//   if (!contact) {
//     return <div>Sorry, but the player was not found</div>
//   }
  return (
    <div>
      <h1>{contact.name} (#{contact.phone})</h1>
      <h2>Position: {contact.email}</h2>
      <Link to='/Home'>Back</Link>
    </div>
  )
}

export default Contact;