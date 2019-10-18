import { Link } from 'react-router-dom'
import React from 'react'

const FullContactList = ({contacts}) => (
  <div>
    <ul className="list-group">
      {
        contacts.map(p => (
          <li className="list-group-item" key={p.id}>
            <Link to={`/contacts/${p.id}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullContactList
