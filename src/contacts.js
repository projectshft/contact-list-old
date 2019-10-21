import React, { Component } from 'react';
import contactForm from "./ContactForm"

const Contacts = ({ contact }) => {
  return (
   <ul>
    <li>
      {contact.name} -
      <button type="button" className="btn btn-primary">EDIT</button>
      <button type="button" className="btn btn-danger">DELETE</button>
    </li>
  </ul>
  )
}
export default Contacts