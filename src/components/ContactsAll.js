import { Link } from 'react-router-dom';
import React from 'react';

const ContactsAll = ({contacts}) => (
  <div>
    <ul>
      {
        contacts.map(c => (
          <li key={c.id}>
            <Link to={`/contacts/${c.id}`}>{c.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default ContactsAll;