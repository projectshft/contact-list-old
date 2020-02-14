import { Link } from 'react-router-dom'
import React from 'react';


const Contacts = ({contacts, addContact, updateContact}) => (


  <div className = "text-center">
  <h1 >Contact List</h1>

    {contacts.map(c => (
      <div key={c.id} >
        <Link to={`/contacts/${c.id}`}>{c.name}</Link>
        <a href='#delete'> Delete </a>
        <div><Link to={`/contacts/${contacts.id}/edit`}>Edit</Link></div>
      </div>

    ))}

    <Link to ='/contacts/new'><button type="button" className="btn btn-primary" onClick={this.addContact}> Add new contact </button> </Link>
    </div>

)

export default Contacts
