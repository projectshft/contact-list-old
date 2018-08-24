import { Link } from 'react-router-dom'
import React from 'react'

const AllContacts = ({contacts}) => (
  <div>
    <ul>
      {
        contacts.map(p => (
          <li key={p.name}>
            <Link to={`/contacts/${p.name}`}>{p.number}>{p.email}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default AllContacts
