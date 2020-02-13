import React from 'react'
import { Link } from 'react-router-dom'

const ContactList = ({contacts}) => (
  <div>
      <ul>
        {
          contacts.map(c => (
            <li key={c.number}>
              <Link to={`/contacts/${c.number}`}>{c.name}</Link>
            </li>
          ))
        }
      </ul>
  </div>
)

export default ContactList