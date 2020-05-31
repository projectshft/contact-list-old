import React from "react";
import { Link } from "react-router-dom";

const ContactList = ({ contacts }) => (
  <div>
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link to={`/contacts/${contact.id}`}>
            <div class="contact-list-name">
              {contact.first_name} {contact.last_name}
            </div>
          </Link>
          <div class="contact-options">
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
