import React from 'react'
import ContactItem from './contactItem'
import {Route} from 'react-router-dom';


const ContactList = ({contacts}) => {
 
  const contactList = contacts.map(person => (
    <ContactItem key={contacts.key} contact={person} />
  ))
  return (
    <div>
      
    {contactList}  
    </div>
  )
}

export default ContactList
