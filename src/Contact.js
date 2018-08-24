import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({props, contacts}) => {
  const contact = _.find(contacts, { name: parseInt(props.match.params.name) });

  if (!Contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (
    <div>
      <h1>{contact.name} (#{contact.name})</h1>
      <h2>Email: {contact.email}</h2>
      <Link to='/Contacts'>Back</Link>
    </div>
  )
}

export default Contact
