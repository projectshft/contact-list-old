import { Link } from 'react-router-dom'
import React from 'react'

const FullList = ({contacts}) => (
  <div>
    <Link to="/">Home</Link> <Link to="/roladex/new">Add Contact</Link>
    <h1>Contacts List</h1>
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          <Link to={`/roladex/${c.id}`}>{c.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default FullList
