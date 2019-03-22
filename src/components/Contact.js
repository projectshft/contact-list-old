import React from 'react'
import { Link } from 'react-router-dom';

const Contact = (props) => {

  return (
    <div>
      <h1>Contacts</h1>
      <Link to="/contacts/new"><button>Add Contact</button></Link>
      {props.contactList.map(user => (
        <li key={user.id}>
          <Link to={`/contact/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </div>
  )
}


export default Contact;
