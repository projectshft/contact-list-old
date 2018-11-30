import React from 'react'
import { Link } from "react-router-dom";

const ContactItem = ({contact}) => {

  return <div className="contact-list-item">
      <img src={contact.imgUrl} className="contact-list-img" />
      <h3 className="name">
        <Link to={`contacts/${contact.key}`}>
          {contact.firstName} {contact.lastName}
        </Link>
      </h3>
      
      <button className="delete-contact">X</button>
    </div>;
}

export default ContactItem

