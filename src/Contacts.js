import { Link, Route } from 'react-router-dom'
import React from 'react'
// import Contact from './Contact';

const Contacts = ({contacts}) => (
  <div>
    <ul>
      {
        contacts.map(c => (
          <li key={c.contactId}>
          <Link to={`/contacts/${c.contactId}`}>{c.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Contacts


// <Link to={`/roster/${p.number}`}>{p.name}</Link>
// <Link to={`/contacts/${c.contactId}`}>{c.name}</Link>
//
// <div>{c.name}</div>
// <div>{c.email}</div>
// <div>{c.phone}</div>
