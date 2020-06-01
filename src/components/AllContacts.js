import { Link } from 'react-router-dom';
import './style.css';
import React from 'react';

const AllContacts = ({contacts}) => (
  <div>
  <h1>Contacts</h1> <Link to={'/contacts/new'}><button type="button" className="btn btn-primary add-post">Add New Contact</button></Link>
    <ul>
      { contacts.map(c => (
        <li key={c.id}>
          <Link to={`/contacts/${c.id}`}>{c.name}</Link>
          <p>&nbsp;&nbsp;&nbsp;</p>
          <Link>edit</Link>
          <p>&nbsp;&nbsp;&nbsp;</p>
          <Link>delete</Link>
        </li>
      ))}
    </ul>

  </div>
);

export default AllContacts;
