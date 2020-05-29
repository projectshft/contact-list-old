import { Link } from 'react-router-dom'
import React from 'react'

const FullContactList = ({contacts}) => (
  <div>
    <ul>
      {
        contacts.map(contact => (
          <li key={contact.number}>
            <Link to={`/contact/${contact.number}`}>{contact.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullContactList