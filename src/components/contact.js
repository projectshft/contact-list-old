import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({props, contacts}) => {
  const contact = _.find(contacts, { id: parseInt(props.match.params.id, 10) });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (
    <div>
      <h1>{contact.name} (#{contact.id})</h1>
      <h2>Phone Number: {contact.phone_number.slice(0,3)+
        '-'+contact.phone_number.slice(3,6)+
      '-'+contact.phone_number.slice(6)}</h2>
      <h2>Email: {contact.email}</h2>
      <h2>Image: <img src={contact.image_url} /></h2>
      <Link to='/contacts-list'>Back</Link>
    </div>
  )
}

export default Contact
