import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

const AllContacts = ({contacts}) => (
    <div>
        <div className='container text-left contacts-title'>
            <div className='row'>
                <h1 id='contact-title'>Contacts</h1>
                <button id='add-contact'><Link to={`/contacts/new`}>Add Contact</Link></button>
            </div>
        </div>
        <div className='container contact-list'>
            <div className='row'>
                <ul>
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
        </div>
    </div>
)

AllContacts.propTypes = {
    contacts: PropTypes.array.isRequired
};
export default AllContacts