import { Link } from 'react-router-dom'
import React from 'react'
import ContactsList from './contacts-list'

const Contacts = (props) => {
    return (
        <div>
            <h1>Contacts   <button className="btn btn-primary" onClick={props.addContact}>Add Contact</button></h1><br/>
            {props.contacts.map(c => (
                <Link to={`/contacts/${c.id}`}>{c.name}</Link>
            ))}
        </div>
    )
}

export default Contacts