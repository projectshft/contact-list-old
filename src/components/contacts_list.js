import React from 'react';
import { Link } from 'react-router-dom'
import NewContactForm from './new_contact_form';
import ContactDetail from './contact_detail_display';
import UpdateContactForm from './update_contact_form';
import Contact from './contact';

const ContactsList = (props) => {


//return the contactItems mapped in the contacts_list.js and  return the li contact elements in a list
return(
  <div>
    <ul className='col-md-4 list-group'>
      {props.contacts.map(c =>(
      <li key={c.id}>
        <Link to={`/contacts/${c.id}`}>{c.name}</Link>
      </li>
    ))
  }
    </ul>
  </div>

)
}

export default ContactsList
