import { Link } from 'react-router-dom'
import React from 'react'

const FullContactList = ({contacts}) => (
  <div>
    <ul className="list-group">
      {
        contacts.map(contact => (
          <li className="list-group-item" key={contact.id}>
            <Link id="contact-name-list" to={`/contacts/${contact.id}`}>{contact.name}</Link>
            <Link id='edit-link' to={`/contacts/${contact.id}`}>edit</Link>
            <Link id='delete-link' to={``} onClick={(e) => {
                debugger; 
                console.log(e.target.parentElement.firstChild.attributes[1].nodeValue)
              }
            }>delete</Link>
          </li>
        ))
      }
    </ul>
  </div>
)



export default FullContactList
