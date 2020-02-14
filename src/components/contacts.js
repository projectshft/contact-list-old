import { Link } from 'react-router-dom'
import React from 'react';


const Contacts = ({contacts, addContact, updateContact, deleteContact}) => (


  <div className = "text-center">
  <h1 >Contact List</h1>

    {contacts.map(c => (
      <div key={c.id} >
        <Link to={`/contacts/${c.id}`}>{c.name}</Link>
        <a href = "#" onClick={function(e) {deleteContact(c.id)}} > Delete </a>
        <a><Link to={`/contacts/${c.id}/edit`}> Edit </Link></a>
      </div>

    ))}

    <Link to ='/contacts/new'><button type="button" className="btn btn-primary" onClick={this.addContact}> Add new contact </button> </Link>
    </div>

)
//onClick={function(e) {deleteContact(e)}

export default Contacts
