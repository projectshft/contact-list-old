import React, {Fragment} from 'react';

const ContactList = ({routerProps, contacts}) => (
  <div className="container mt-5">
    <ul className="contact-list list-group" key={c.id}>
      {contacts.map(c => {
        return (
          <li className="contact list-group-item my-2">
            <h3 className='contact-name'>{c.name}</h3>
            <a href={`/contacts/${c.id}`} className="btn btn-sm btn-primary mx-2">Details</a>
          </li>
        );
      })}
    </ul>  
  </div>
);

export default ContactList;