import { Link } from 'react-router-dom'
import React from 'react'

const FullContactsList = ({contacts}) => (
  <div>
    <ul>
      {
        contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullContactsList
