import { Link } from 'react-router-dom'
import React from 'react'

const FullContactList = ({contacts}) => (
  <div>
    <table>
      {
        contacts.map(contact => (
          <tr key={contact.id}>
            <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
          </tr>
        ))
      }
    </table>

  </div>
)

export default FullContactList