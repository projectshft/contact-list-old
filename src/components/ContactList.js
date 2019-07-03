import { Switch, Route, Link } from 'react-router-dom'
import React from 'react'

const ContactList = ({editContact, contacts}) => (
  <div>
    <ul>
      {
        contacts.map(c => (
          <li key={c.id}>
            <Link to={`/contacts/${c.id}`}>{c.name}</Link> <Link to={`/contacts/${c.id}/edit`}>Edit</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default ContactList