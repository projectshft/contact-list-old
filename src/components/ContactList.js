// component that will hold the list of contact components on the /contacts (home) page 
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// create a function to render each contact entry to the page
const ContactList = ({contacts}) => (
    <div>
        <ul>
            {
                contacts.map(c => (
                    <li key={c.id}>
                        <h3><Link to={`/contacts/${c.id}`} style={{textDecoration: 'none'}}>{c.name}</Link>&nbsp;
                        <a href='' style={{pointerEvents: 'none'}}>Edit</a>&nbsp;<a href='' style={{pointerEvents: 'none'}}>Delete</a></h3>
                    </li>
                ))
            }
        </ul>
    </div>
)

//define prop types
ContactList.propTypes = {
    contacts: PropTypes.array.isRequired

}

export default ContactList;