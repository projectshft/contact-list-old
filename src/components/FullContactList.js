import React from 'react';
import { Link } from 'react-router-dom'


const FullContactList = ({contactList}) => (
<div>
  <ul>
    {
      contactList.map((contact) => (
        <li key={contact.key}>
          <Link to ={`/contacts/${contact.key}`}>{contact.name}</Link>
        </li>
      ))
    }
  </ul>
</div>

)

export default FullContactList
