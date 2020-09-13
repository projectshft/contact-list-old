import React from 'react'
import Contact from './Contact';

// WARN do not beautify the JSX
// TODO index/key is to be made random, or is this a different index?

const ContactsList = ({contacts}) => {  
  console.log('in ContactsList');
  console.log('contacts is passed as ', contacts);
  
  const contactsAll = contacts.map((contact) => {
    //console.log('mapping this: ', contact);
    
    return (
      <Contact key={contact.key} contact={contact.name} />
    )
  });


    return (
      <ul className='col-md-4 contacts-list'> 
        {contactsAll}
      </ul>
    );
  }
  


export default ContactsList