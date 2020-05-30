import { Link } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const FullContactsList = ({contacts}) => (
  <div>
    <h1>Contacts</h1>
    <Link to={'/contacts/new'}>
      <button type="button" className="btn btn-primary">Add Contact</button>
    </Link>
    <ul>
      {
        contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
            <span>  edit  </span>
            <span>  delete  </span>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullContactsList
