import React from 'react';
import { Link } from "react-router-dom"
import _ from 'lodash'

const Contact = ({contacts, contactId, deleteContact}) => {
  let currentContact = {}
  contacts.forEach(contact => {
    if (contact.id === contactId) {
      currentContact = _.clone(contact)
    }
  })

  return (
    <div>
      <div className="row">
        <div className="col col-md-3">
          <Link to="/contacts"><button className="btn btn-primary">Back</button></Link>
        </div>
        <div className="col col-md-9"></div>
      </div>
      <div className="row">
        <div className="col col-md-3"></div>
        <div className="col col-sm-8 col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
          <img className="contact-image mx-auto d-block" alt="" src={currentContact.imageURL}></img>
          <div>Name: {currentContact.name}</div>
          <div>Number: {currentContact.phone}</div>
          <div>Email: {currentContact.email}</div>
        </div>
        <div className="col col-md-3"></div>
      </div>
      <div className="row">
        <div className="col col-md-3"></div>
        <div className="col col-sm-8 col-md-6">
          <span><Link to={`/contacts/${currentContact.id}/edit`}><button className="btn btn-primary">Edit</button></Link></span>
          <span><Link to="/contacts"><button className="btn btn-primary" onClick={event => deleteContact(currentContact.id)}>Delete</button></Link></span>
        </div>
        <div className="col col-md-3"></div>
      </div>
    </div>
  )
}

export default Contact;
