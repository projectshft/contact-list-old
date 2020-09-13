import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

const AllContacts = ({contacts}) => (
    <div>
        <ul>
            <h1>Contacts
                <button><Link to={`/contacts/new`}>Add Contact</Link></button>
            </h1>
            {
                contacts.map(elem => (
                    <li key={elem.id}>
                        <Link to={`/contacts/${elem.id}`}>{elem.name}</Link>
                        <span id='edit'>edit</span> <span id='delete'>delete</span>
                    </li>
                ))
            }
        </ul>
    </div>
)

AllContacts.propTypes = {
    contacts: PropTypes.array.isRequired
};
export default AllContacts