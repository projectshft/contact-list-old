import { Link } from 'react-router-dom'
import React from 'react'

const AllContacts = ({contacts}) => (
    <div>
        <ul>
            {
                contacts.map(elem => (
                    <li key={elem.id}>
                        <Link to={`/contacts/${elem.id}`}>{elem.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default AllContacts