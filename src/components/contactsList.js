import React from 'react';
import {Link} from 'react-router-dom';

/* This component takes in the contacts state, maps through each one, and displays a list of the
   current contacts in your list */

const ContactsList = ({contacts}) => (
  <div>
    <h3>My Contacts List:</h3>
    <ul>
      { contacts.sort(compare).map(contact => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.lastName}, {contact.firstName}</Link>
          </li>
        ))
      }
    </ul>
    <Link to="/contacts/new">Add Contact</Link>
  </div>
);

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const lastNameA = a.lastName.toUpperCase();
  const lastNameB = b.lastName.toUpperCase();

  let comparison = 0;
  if (lastNameA > lastNameB) {
    comparison = 1;
  } else if (lastNameA < lastNameB) {
    comparison = -1;
  }
  return comparison;
}

export default ContactsList;