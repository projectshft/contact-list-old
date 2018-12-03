import { Link, Switch, Route } from 'react-router-dom'
import React from 'react'
import ContactView from './Contact-View'

const ContactListItem = ({contact, deleteContact}) => {

    return (
      <li className="list-group-item" id={contact.id}>
        <img src={contact.image} className="thumbnail"></img> {contact.name} 
        <Link to={`/contacts/${contact.id}`}><button className='btn btn-success'>View Details</button></Link>
      </li>
    )
}

export default ContactListItem