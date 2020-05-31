import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';

const Contact = ({contactId, contacts}) => {
console.log(contacts)
  const contact = _.find(contacts, { id: contactId });

  console.log(contact)
  if (!contact) {
    return <div>That contact was not found, please try again.</div>
  }



  return (
    <div className="contact-view">
      <img src={contact.image_url} alt={contact.name} width="300" height="400"></img>
      <h1>{contact.name}</h1>

      <h2>email: {contact.email}</h2>
      <h2>Phone Number: {contact.phone_number}</h2>

      <Link to='/contacts'>Back</Link>
    </div>
  )
}

// tried name: but kept return undefined even if it was defined
//checks that the properties of Contact are there as both are required
Contact.propTypes = {
  contactId: PropTypes.number.isRequired,
  contacts: PropTypes.array.isRequired,

}



export default Contact;
