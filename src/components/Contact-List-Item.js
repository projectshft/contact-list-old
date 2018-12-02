import { Link } from 'react-router-dom'
import React from 'react'

const ContactListItem = ({contact}) => {
    return (
      <li className="list-group-item" id={contact.id}>
      <span> <img src={contact.image} className="thumbnail"></img> {contact.name} <button className='btn btn-success'>View Details</button></span>
      </li>
     )
}



export default ContactListItem