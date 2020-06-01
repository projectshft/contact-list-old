import { Link } from 'react-router-dom';
import './style.css';
import React from 'react';

// Displays all contacts on file
// Link below h1  takes user to ContactNew to fill out a form for a new contact
const AllContacts = ({contacts}) => (
  <div>
  <h1>Contacts</h1>
  <Link to={'/contacts/new'}><button type="button" className="btn btn-primary add-post">Add New Contact</button></Link>

    <ul>
      {
        // Function maps each contact name to a list
        // and gives each name link functionality to go
        // to the individual contact's page based on contactId.

          // Edit and delete links are not currently functional
        contacts.map(c => (
        <li key={c.id}>
          <Link to={`/contacts/${c.id}`}>{c.name}</Link>

          <p>&nbsp;&nbsp;</p>
          <Link>edit</Link>
          <p>&nbsp;&nbsp;</p>
          <Link>delete</Link>
        </li>
      ))}
    </ul>

  </div>
);

export default AllContacts;
