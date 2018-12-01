import React from "react";
import { Link } from "react-router-dom";
import { sendEvent } from "../state";

const ContactListItem = ({ contact }) => {
  const contactURL = `/contacts/${contact.id}`;

  return (
    <div className="card col-2" >
      <img className="contact-image-main" alt={contact.name} src={contact.image_url}/>
      <Link to={contactURL} onClick={() => sendEvent("setSelectedContact", contact)}
      className = "contact-name-main">
        {contact.name}
      </Link>
      <button type="button" className="btn btn-danger btn-sm" onClick={() => {sendEvent('setSelectedContact', contact); sendEvent('requestDelete')}}>
        Delete Contact
      </button>
    </div>
  );
};

export default ContactListItem;
