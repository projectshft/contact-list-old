import React from 'react'
import { Link } from 'react-router-dom'

const ContactList = ({contacts}) => (
  <div className="ui container items">
        {
          contacts.map(c => (
            <li key={c.id}>
              <Link to={`/contacts/${c.id}`}>{c.name}</Link>
              <div>
                <Link to={`/contacts/:${c.id}/update`}>Edit</Link>

              </div>
            </li>
          ))
        }
      <div><Link to='/contacts/add'>Add New Contact</Link></div>
  </div>
)

export default ContactList