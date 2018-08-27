import { Link } from 'react-router-dom'
import React from 'react'


const Contacts = ({contacts}) => {
  function deleteContact() {
    console.log('delete me');
  }
  return (
  <div>
   <h1 id="header">CONTACTS</h1>
   <button>edit</button>
   <ul>
    {
      contacts.map(c => (
        <li key={c.id}>
          <Link to={`/contacts/${c.id}`}>{c.name}</Link>
          <button onClick={deleteContact} >delete</button>
        </li>
      ))
    }
   </ul>
  </div>
  )
}

export default Contacts
