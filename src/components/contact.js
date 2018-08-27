import React from 'react'
import {Link } from 'react-router-dom'
import _ from 'lodash'
import '../App.css'

const Contact = ({props, contacts}) => {
  const contact = _.find(contacts, { firstName: parseInt(props.match.params.firstName, 10) });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }

  return (
    <div>
      <h1>{props.contact.firstName} ({contact.lastName})</h1>
      <h2>{contact.email}</h2>
      <img href={contact.imageURL} alt=""></img>
      <h2>{contact.phoneNumber}</h2>
      <Link to='/contactList'>Back</Link>
    </div>
  )
}

export default Contact
