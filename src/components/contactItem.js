import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "react-confirm-alert/src/react-confirm-alert.css";
import Confirmation from './confirmation.js'

const ContactItem = ({ props, contact }) => {

  return <div className="contact-list-item col-md-4">
    <div className="contact-card">
      <Link to={`contacts/${contact.key}`}>
        <img src={contact.imgUrl} className="contact-list-img" />
        <h4 className="name">
          {contact.firstName} {contact.lastName}
        </h4>
      </Link>
      <Confirmation deleteContact={props.deleteContact} contactKey={contact.key} />
    </div>
  </div>;
}

export default ContactItem

//every prop should be an individual contact object with all data as strings (for simplicity sake, there is some form validation on the inputs)
ContactItem.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  })
};

