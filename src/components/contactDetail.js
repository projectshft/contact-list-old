import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import Image from 'react-bootstrap/Image'
import PropTypes from 'prop-types';

//The Contact Detail component
//contacts and contactId are passed down as props
const ContactDetail = ({contactId, contacts}) => {

  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }

  return (

    <div className ="text-center">
      <h2>{contact.name}'s Information</h2>
      <h4>Name: {contact.name}</h4>
      <Image src = {contact.image_url}  alt="contact"/>
      <h4>Email: {contact.email}</h4>
      <h4>Phone: {contact.phone}</h4>
      <div><Link to='/contacts'>Back To Contact List</Link></div>
      <Link to={`/contacts/${contact.id}/edit`}><button className = "btn btn-outline-success">Edit</button></Link>
    </div>
  )
}

export default ContactDetail

ContactDetail.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactId: PropTypes.string.isRequired
}
