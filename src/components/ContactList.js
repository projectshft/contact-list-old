// component that will hold the list of contact components on the /contacts (home) page 
import React from 'react'
import { Link } from 'react-router-dom'

// create a function to render each contact entry to the page
const ContactList = ({contacts}) => (
    <div>
        <ul>
            {
                contacts.map(c => (
                    <li key={c.id}>
                        <Link to={`/contacts/${c.id}`}>{c.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default ContactList;