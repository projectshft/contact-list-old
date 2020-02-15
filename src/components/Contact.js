import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({ contactId, contacts }) => {
    console.log(contactId, contacts)
    const contact = _.find(contacts, { id: contactId });
    console.log(contact)

      if (!contact) {
        return <div>this contact was not found</div>
      }

    return (
        <div>
            <h1>{contact.name} <br/>(phone number: {contact.phone})</h1>
            <h2>Email: {contact.email}</h2>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default Contact;