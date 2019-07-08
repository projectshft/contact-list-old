import { Link } from 'react-router-dom'
import React from 'react'


// Lists all the contacts in the main /contacts-list url
const AllContacts = ({contacts}) => (
  <div>
    <ul>
      {
        contacts.map(c => (
          <li key={c.id}>
            <Link to={`/contacts-list/${c.id}`}>{c.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default AllContacts
