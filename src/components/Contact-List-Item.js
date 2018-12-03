import { Link } from 'react-router-dom'
import React from 'react'


const ContactListItem = ({contact}) => {

    return (
      <li className="list-group-item" id={contact.id}>
        <img src={contact.image} className="thumbnail" alt='Profile Thumbnail'></img> {contact.name} 
        <Link to={`/contacts/${contact.id}`}><button className='btn btn-success'>View Details</button></Link>
      </li>
    )
}

export default ContactListItem