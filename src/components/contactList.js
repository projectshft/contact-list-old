import React from 'react';
import Contact from './contact';



const ContactList = (props) => {
  const contactData = props.contacts.map((contact, index) => {
    return (
      <Contact key={index} contact={contact} />
    )


  })

  return (
    <ul className='contacts'>
      {contactData}
    </ul>
  )
}

export default ContactList
