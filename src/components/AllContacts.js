import React from 'react';
import { Link } from "react-router-dom"

const AllContacts = ({contacts, deleteContact}) => {

  return (
    <div>
      <h2>Contacts</h2>
      <div>
        {
          contacts.map( c => (
            <div key={`${c.id}`}>
              <Link to={`/contacts/${c.id}`}>
                <div>{c.name}</div>
              </Link>
              <span><button className="btn button-primary"><Link to={`/contacts/${c.id}/edit`}>Edit</Link></button></span>
              <span><button className="btn button-primary" onClick={event => deleteContact(c.id)}>Delete</button></span>
            </div>
          ))
        }
      </div>
      <button className="btn button-primary"><Link to="/contacts/new">New Contact</Link></button>
    </div>
  )
}

export default AllContacts;
