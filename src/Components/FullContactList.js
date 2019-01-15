import { Link } from 'react-router-dom'
import React from 'react'

const FullContactList = ({contacts}) => {
return (
  
  <div>
    <h1> Contact List </h1>  
    <button>
    <Link to={`/contacts/new`}>Make new</Link>
    </button>
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
    }

export default FullContactList
