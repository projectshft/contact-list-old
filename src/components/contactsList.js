import React from 'react';
import {Link} from 'react-router-dom';

/* This component takes in the contacts state, maps through each one, and displays a list of the
   current contacts in your list */

const ContactsList = ({contacts}) => (
  <div>
    <h3>My Contacts List:</h3>
    <ul>
      { contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/roster/${contact.id}`}>{contact.lastName}, {contact.firstName}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default ContactsList;