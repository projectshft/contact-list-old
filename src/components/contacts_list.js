import React from 'react';
import { Link } from 'react-router-dom'
import NewContactForm from './new_contact_form';
import UpdateContactForm from './update_contact_form';
import SingleContact from './contact';

const ContactsList = (props) => {


//return the contactItems mapped in the contacts_list.js and  return the li contact elements in a list
return(
  <div>
    <ul className='col-md-4 list-group'>
      {props.contacts.map(contact =>(
      <li key={contact.id}>
        <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
      </li>
    ))
  }
    </ul>

  </div>

)
}

export default ContactsList
