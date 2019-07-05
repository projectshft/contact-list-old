import React from 'react';
import { Link } from 'react-router-dom'


const FullContactList = ({contactList}) => (
<div>
  <Link to ='/contacts/new'>
    <button className ='btn btn-primary'>
      Add Contact
      <i className="fas fa-plus"></i>
    </button>
  </Link>

  <ul>
    {
      contactList.map((contact) => (
        <li key={contact.key}>
          <i className="fas fa-user"></i>
          <Link to ={`/contacts/${contact.key}`}>{contact.name}</Link>
        </li>
      ))
    }
  </ul>
</div>

)

export default FullContactList
