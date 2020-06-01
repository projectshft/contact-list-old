import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ContactList = ({ contacts }) => (
  <div>
    <Link to={"/contacts/new"}>Add Contact</Link>

    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link to={`/contacts/${contact.id}`}>
            <div className="contact-list-name">{contact.name}</div>
          </Link>
          <div className="contact-options">
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
