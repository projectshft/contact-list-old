import React from "react";
import { Link } from "react-router-dom";
import { sendEvent, getState } from "../state";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ContactListItem = ({ contact }) => {
  const contactURL = `/contacts/${contact.id}`;

  return (
    <div className="card col-2">
      <img className="contact-image-main" alt={contact.name} src={contact.image_url}/>
      <Link to={contactURL} onClick={() => sendEvent("setSelectedContact", contact)}
      className = "contact-name-main">
        {contact.name}
      </Link>
      <button type="button" className="btn btn-danger btn-sm" onClick={() => sendEvent("requestDelete")}>
        Delete Contact
      </button>
      <Modal
          className = "delete-modal"
          overlayClassName="overlay"
           closeTimeoutMS={250}
           isOpen={getState('showDeleteModal')}
           contentLabel="onRequestClose"
           onRequestClose={this.cancelDelete}>
          <p>Are you sure you wish to delete {contact.name}?</p>
          <button className="btn btn-success modal-btn" onClick={() => sendEvent("deleteContact", contact)}>
            Confirm Delete
          </button>
          <button className="btn btn-danger modal-btn" onClick={() => sendEvent('cancelDelete')}>
            Never Mind
          </button>
      </Modal>
    </div>
  );
};

export default ContactListItem;
