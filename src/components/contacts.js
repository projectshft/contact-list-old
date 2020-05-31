import { Link } from 'react-router-dom'
import React from 'react'
// import PropTypes from 'prop-types';
//Contacts inherits contacts parameter from parent component. Maps each contact to an li that links to its individual page
//adds edit and delete buttons to each item (non-functinal at the moment)
const Contacts = ({contacts, deleteContact}) => (
  <div>
  <h1>Contacts</h1>
    <ul>
      {
        contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.name} </Link>
            <button className="btn-primary">Edit</button>
            <button onClick={() => deleteContact(contact.id)} className=" btn-primary">Delete</button>
          </li>

        ))
      }
    </ul>
    <Link to='/contacts/new'>Add Contact</Link>
  </div>
)

// Contacts.propTypes = {
//   contacts: PropTypes.string,
//   image_url: PropTypes.string,
//   email: PropTypes.string,
// }


export default Contacts
