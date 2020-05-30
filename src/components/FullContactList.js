import { Link } from 'react-router-dom'
import React from 'react'

const FullContactList = ({contacts}) => (
  <div>
    <table>
      {
        contacts.map(contact => (
          <tr key={contact.number}>
            <Link to={`/contact/${contact.number}`}>{contact.name}</Link>
          </tr>
        ))
      }
    </table>

  </div>
)

export default FullContactList