import React from 'react';
import { Link } from "react-router-dom"
import _ from 'lodash'

//The Contact component displays a single contact
//It displays the image, name, phone number and email associated with that contact
const Contact = ({contacts, contactId, deleteContact}) => {
  //Use contactId to find the current contact in the contacts array
  //Clone that contact for use in rendering the page
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
          {/* Render a back button at the top left hand side of the page */}
          {/*The back button takes the user back to the page displaying all contacts */}
          <Link to="/contacts"><button className="btn btn-primary">Back</button></Link>
        </div>
        <div className="col col-md-9"></div>
      </div>
      <div className="row">
        <div className="col col-md-3"></div>
        {/* Render the image, name, phone number and email associated with the current contact */}
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
        {/* Render buttons for deleting and editing the current contact */}
        {/* These buttons call the editContact and deleteContact functions passed down from the App component */}
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
