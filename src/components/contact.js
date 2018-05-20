import React from 'react';
import {Link} from 'react-router-dom';
import {sendEvent} from '../state';

class Contact extends React.Component {

  deleteContact = () => {
    // Confirm the user really wants to delete contact
    var deleteConfirmed = window.confirm(`Are you sure you want to delete ${this.props.contact.name}`);

    if (deleteConfirmed) {
      sendEvent('deleteContact', this.props.contact.id);
    }
  };

  render(props) {
    return (
      <li className="contact">
        <img src={`${this.props.contact.image_url}`} alt=""/>
        <span>{this.props.contact.name}</span>
        <span className="contact-options">
          <Link to={`/contacts/${this.props.contact.id}`}>edit</Link>
          <span
            onClick={this.deleteContact}
            className="delete-contact text-danger">Delete
          </span>
        </span>
      </li>
    );
  };
};

export default Contact;
