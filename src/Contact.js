import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({props, contacts}) => {
  const contact = _.find(contacts, { contactId: props.match.params.number });

  return (
    <div>
      <img src={contact.image} />
      <div>{contact.name}</div>
      <div>{contact.phone}</div>
      <div>{contact.email}</div>
      // <button type="button" onClick={props.editContact}>Edit</button>
      <button type="button" onClick={() => {props.removeContact(props.match.params.number)}}>Delete</button>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default Contact
