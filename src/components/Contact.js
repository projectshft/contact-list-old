import React from 'react';
import { Link } from "react-router-dom"
import _ from 'lodash'

const Contact = ({contacts, contactId, deleteContact}) => {
  let currentContact = {}
  contacts.forEach(contact => {
    if (contact.id == contactId) {
      currentContact = _.clone(contact)
    }
  })

  return (
    <div>
      <button className="btn button-primary"><Link to="/contacts">Back</Link></button>
      <br></br>
      <div>{currentContact.name}</div>
      <div>{currentContact.phone}</div>
      <div>{currentContact.email}</div>
      <img className="contact-image" src={currentContact.imageURL}></img>
      <br></br>
      <span><button className="btn button-primary"><Link to={`/contacts/${currentContact.id}/edit`}>Edit</Link></button></span>
      <span><button className="btn button-primary" onClick={event => deleteContact(currentContact.id)}><Link to="/contacts">Delete</Link></button></span>
    </div>
  )
}

export default Contact;
