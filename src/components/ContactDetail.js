import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

// Create a stateless component that will recieve the contactKey and contacts props
const ContactDetail = ({contactKey, contacts}) => {
  // Find the clicked contact by matching the contactKey to the corresponding contact
  const contact = _.find(contacts, { key: contactKey });

  // Alert the user if this contact doesn't exist
  if (!contact) {
    return <div>Sorry, but this contact doesn't exist</div>
  }

// Check to ensure that the right contact is being clicked
console.log(contact)

  // Render all of the clicked contact's information to the page
  return (
    <div className="col-md-7 offset-md-4">
      <br></br>
      <img src={contact.image} alt="" width="400" height="auto" className="img-responsive"></img>
      <br></br>
      <br></br>
      <h2>{contact.name}</h2>
      <h4>{contact.phone}</h4>
      <h4>{contact.email}</h4>
      <div>
        <br></br>
        // Include a link to the edit page
        <Link to={`/contacts/edit/${contact.key}`}><button type="button" className="btn btn-info">Edit</button></Link>
        <br></br>
        // Include a link back to the contacts page
        <Link to='/contacts' className="text-info">Back to Contacts</Link>
        </div>
    </div>
  )
}

// Add proptypes to benefit myself and other devs working on this code in the future
ContactDetail.propTypes = {
  contact: PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  contacts: PropTypes.array.isRequired,
  contactKey: PropTypes.number
};


export default ContactDetail
