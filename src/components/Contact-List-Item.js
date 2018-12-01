import { Link } from 'react-router-dom'
import React from 'react'

const ContactListItem = ({contact}) => {
    return (
       <li className="list-group-item" key={contact.id}>
        <img src={contact.image}></img>{contact.name}
       </li>
     )
}



export default ContactListItem