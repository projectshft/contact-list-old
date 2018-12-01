import React from 'react'
import { Link } from "react-router-dom";

const ContactItem = ({contact}) => {

  return <div className="contact-list-item col-md-4">
      <img src={contact.imgUrl} className="contact-list-img" />
      <h4 className="name">
        <Link to={`contacts/${contact.key}`}>
          {contact.firstName} {contact.lastName}
        </Link> </h4>
      <button className="delete-contact btn btn-danger">X</button>
    </div>
}

export default ContactItem

