import { Link } from 'react-router-dom'
import React from 'react'

const AllContacts = ({contacts}) => (
    <div>
        <ul>
            <h1>Contacts
                <button><Link to={`/contacts/new`}>Add Contact</Link></button>
            </h1>
            {
                contacts.map(elem => (
                    <li key={elem.id}>
                        <Link to={`/contacts/${elem.id}`}>{elem.name}</Link><span>edit</span> <span>delete</span>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default AllContacts