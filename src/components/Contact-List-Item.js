import { Link } from 'react-router-dom'
import React from 'react'

const ContactListItem = ({contact}) => {
    return (
      <li className="list-group-item">
      <span> <img src={contact.image}></img> - {contact.name} </span>
      </li>
     )
}



export default ContactListItem