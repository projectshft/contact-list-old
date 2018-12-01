import { Link } from 'react-router-dom'
import React from 'react'

const ContactListItem = ({contacts}) => (
  <div>
    <ul className="list-group">
    {
     contacts.map(contact => (
       <li className="list-group-item" key={contact.id}>
       <img src={contact.image}></img>{contact.name}{contact.phoneNumber}{contact.email}
       </li>
     )) 
    }
   </ul>
  </div>
)

export default ContactListItem