import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const ContactInformation = ({contactId, contacts}) => {
   const contact = contacts.filter(contact => contact.id === contactId );//filter or find method
  debugger;


  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (

    <div>
      <h1>{contact.name}</h1>
      <image>{contact.image_url}</image>
      <h4>{contact.email}</h4>
      <h4>{contact.phone}</h4>
      <div><Link to='/contacts'>Back To Contact List</Link></div>
      <div><Link to={`/contacts/${contacts.id}/edit`}>Edit</Link></div>
    </div>
  )
}

export default ContactInformation
