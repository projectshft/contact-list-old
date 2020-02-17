import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import Image from 'react-bootstrap/Image'
import PropTypes from 'prop-types';

//The Contact Detail Component
//contacts and contactId are passed down as props and it's stateless
const ContactDetail = ({contactId, contacts}) => {
  //finds the contact that matching the contactId
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
//returns the contact detailed infromation and renders it on the page
  return (

    <div className ="text-center">
      <h5>{contact.name}</h5>
      <Image src = {contact.image_url} style={{width: 350, height: 'auto'}} alt="contact-image"/>
      <h6>Email: {contact.email}</h6>
      <h6>Phone: {contact.phone}</h6>
      {/*Links to a back button that takes the user back to the /contacts view and main contacts list. */}
      <div><Link to='/contacts'>Back To Contact List</Link></div>
      {/* Links to the to the edit page where the user can edit the information about the contact */}
      <Link to={`/contacts/${contact.id}/edit`}><button className = "btn btn-outline-success">Edit</button></Link>
    </div>
  )
}



//Required Proptypes
ContactDetail.propTypes = {
  contacts: PropTypes.array.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    email: PropTypes.string.isRequiered,
    phone: PropTypes.number.isRequired
  }),
  contactId: PropTypes.string.isRequired
}

export default ContactDetail
