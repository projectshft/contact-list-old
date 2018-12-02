import React from 'react';

const ContactList = ({routerProps, contacts, deleteContact}) => (
  <div className="container mt-5">
    <ul className="contact-list list-group">
      {contacts.map(c => {
        return (
          <li className="contact list-group-item my-2" key={c.id}>
            <h3 className='contact-name'>{c.name}</h3>
            <a href={`/contacts/${c.id}`} className="btn btn-sm btn-primary mx-2">Details</a>
            <button className="btn btn-sm btn-danger" onClick={() => deleteContact(c)}>Delete</button>
          </li>
        );
      })}
    </ul>  
  </div>
);


export default ContactList;