import { Link } from 'react-router-dom'
import React from 'react'

const FullList = ({contacts}) => (
  <div>
    <Link to="/">Home</Link>
    <h1>Contacts List <button>Add Contact</button></h1>
    <ul>
      {ContactAPI.all().map(p => (
        <li key={p.id}>
          <Link to={`/contact-list/${p.id}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default FullList
