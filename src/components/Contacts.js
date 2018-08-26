import { Link } from 'react-router-dom'
import React from 'react'

const Contacts = ({contacts}) => (
  <div>
   <h1 id="header">CONTACTS</h1>
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

export default Contacts
