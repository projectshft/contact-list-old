import { Link } from 'react-router-dom'
import React from 'react'
import ContactsList from './contacts-list'

const Contacts = (props) => {
    return (
        <div>
            <h1>
                Contacts   
                <Link to="/contacts/new">
                    <button className="btn btn-primary" onClick={props.addContact}>Add Contact</button>
                </Link>
            </h1>
            
            <br/>
            
            {props.contacts.map(c => (
                <Link to={`/contacts/${c.id}`}>{c.name}</Link>
            ))}
            <br/>
        </div>
    )
}

export default Contacts