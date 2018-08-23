import React from 'react';
import Contact from './contact';
import NewContactForm from './new_contact_form';


const ContactsList = (props) => {
  //to see the data
  console.log(props);
  //contactsList will pass in props and return a hash of the contacts
  const contactItems = props.contacts.map((contact, index) => {
    return (
      <Contact key={index} contact={contact} />
    )
  })

//return the contactItems mapped in the contacts_list.js and  return the li contact elements in a list
  return (
    <ul className='col-md-4 list-group'>
      {contactItems}
    </ul>
  )
}

export default ContactsList
