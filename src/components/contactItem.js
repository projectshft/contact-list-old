import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const ContactItem = ({ props, contact }) => {

  return <div className="contact-list-item col-md-4">

    <Link to={`contacts/${contact.key}`}>
      <img src={contact.imgUrl} className="contact-list-img" />
      <h4 className="name">
        {contact.firstName} {contact.lastName}
      </h4>
    </Link>
    <button onClick={() => props.deleteContact(contact.key)} className="delete-contact btn btn-danger">X</button>
  </div>
}

export default ContactItem

//every prop should be an individual contact object all data as strings
ContactItem.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  })
};

