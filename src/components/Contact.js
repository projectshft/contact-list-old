import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({ contactId, contacts }) => {
    console.log(contactId, contacts)
    const contact = _.find(contacts, { id: contactId });
    console.log(contact)

      if (!contact) {
        return <div>this contact was not found !</div>
      }

    return (
        <div className="card shadow col-7 bg-black rounded m-2">
            <h4>Name:  {contact.name} <br/>phone number: {contact.phone}</h4>
            <h4>Email: {contact.email}</h4><br/>
            <h4>Picture: <img src={contact.picture} width="120" height="120" /></h4>
            <Link to='/'>Back</Link>
        </div>
    )
}


export default Contact;