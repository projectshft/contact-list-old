import { Link } from 'react-router-dom';
import React from 'react';

const ContactList = (props) => {


    return (
      <div>
        <h1>Contacts</h1>
        <Link to='/contacts/new'>
          <button type='button' className='btn btn-primary'>Add New Contact</button>
        </Link>
        <ul>
          {props.contacts.map(contact => (
            <li key={contact.key}>
              <Link to={`/contacts/${contact.key}`} className='customer-list'>{contact.name}</Link>
              <a href='https://bit.ly/3dmg35E' className="edit">edit</a>
              <a href='https://bit.ly/2ZUjixx' className="delete">delete</a>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default ContactList
