import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types';
//Contacts inherits contacts parameter from parent component. Maps each contact to an li that links to its individual page
//adds edit and delete buttons to each item
const Contacts = ({contacts, deleteContact, editContact}) => (
  <div className="card">

    <ul className="list-group">
    <li className="list-group-item">
      <h1>Contacts</h1>
    </li>
      {
        contacts.map(contact => (
          <li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/contacts/${contact.id}`}>{contact.name} </Link>
            <div>
              <button onClick={() => editContact(contact.id)}className="btn btn-light">Edit</button>
              <div className="divider"></div>
              <button onClick={() => deleteContact(contact.id)} className="btn btn-light">Delete</button>
            </div>
          </li>

        ))
      }
      <li className="list-group-item">
        <Link to='/contacts/new'>
        <button className="btn btn-primary">Add Contact</button>
        </Link>
      </li>
    </ul>

  </div>
)

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired
}


export default Contacts
