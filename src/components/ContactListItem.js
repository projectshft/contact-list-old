import React from "react";
import { Link } from "react-router-dom";
import { sendEvent, getState } from "../state";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ContactListItem = ({ contact }) => {
  const contactURL = `/contacts/${contact.id}`;

  return (
    <li>
      <img className="contact-image" alt={contact.name} src={contact.image_url}/>
      <Link to={contactURL} onClick={() => sendEvent("setSelectedContact", contact)}>
        {contact.name}
      </Link>
      <button type="button" className="btn btn-danger" onClick={() => sendEvent("requestDelete")}>
        Delete Contact
      </button>
      <Modal
           isOpen={getState('showDeleteModal')}
           contentLabel="onRequestClose"
           onRequestClose={this.cancelDelete}>
          <p>Are you sure you wish to delete this contact?</p>
          <button onClick={() => sendEvent("deleteContact", contact)}>
            Confirm Delete
          </button>
          <button onClick={() => sendEvent('cancelDelete')}>
            Never Mind
          </button>
      </Modal>
    </li>
  );
};

export default ContactListItem;
