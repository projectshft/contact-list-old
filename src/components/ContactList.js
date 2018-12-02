import React from 'react';
import {Link} from 'react-router-dom';

const ContactList = ({contacts, deleteContact}) => (
  <div className="container mt-5">
    <ul className="contact-list list-group">
      {contacts.map(c => {
        return (
          <li className="contact list-group-item my-2" key={c.id}>
            <h3 className='contact-name'>{c.name}</h3>
            <Link to={`/contacts/${c.id}`} className="btn btn-sm btn-primary mx-2">Details</Link>
            <button className="btn btn-sm btn-danger mr-2" onClick={() => deleteContact(c)}>Delete</button>
          </li>
        );
      })}
    </ul>  
  </div>
);


export default ContactList;