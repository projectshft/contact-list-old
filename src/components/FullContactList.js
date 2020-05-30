import { Link } from 'react-router-dom'
import React from 'react'

const FullContactList = ({contacts}) => (
  <div>
    <table>
      {
        //mapping all contacts from App.js to render the full list 
        contacts.map(contact => (
          <tr key={contact.id}>
            {/* creating a link for each contact to route to it's own "details" page
            the contacts details will be rendered with the "ContactInfo" component */}
            <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
          </tr>
        ))
      }
    </table>

  </div>
)

export default FullContactList