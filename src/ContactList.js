import React, { Component } from 'react';
import contacts from "./contacts"



const ContactList = (props) => {
  const contactDetails = props.contacts.map((contact, index) => {
    return (
      <contacts key={index} contact={contact} />
    )
  })

  return (
    <ul className='col-md-4 list-group'>
      {contactDetails}
    </ul>
  )
}


export default ContactList;
