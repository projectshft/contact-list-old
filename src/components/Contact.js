import { Link } from 'react-router-dom';
import React from 'react';
import _ from 'lodash'

// Displays an individual contact
const Contact = ({contactId, contacts}) => {

  const contact = _.find(contacts, {id: contactId});

  // Message displayed if user enters a string of numbers
  // in the URL that does not match a contactId on file
    if (!contact) {
      return (
        <div>
        <p>Sorry, but the contact was not found</p>
        <Link to="/contacts">Back</Link>
      </div>);
    } else {

    // Displays contact name and, if on file,
    // phone_number, email, and image_url
    return (
      <div>
        <h1>
          {contact.name}
        </h1>
        <h2>Phone: {contact.phone_number}</h2>
        <h2>Email: {contact.email}</h2>
        <div><img src={contact.image_url} /></div>

        <Link to="/contacts">Back</Link>
      </div>
    );
  }
};

export default Contact;
