import React from 'react';


const FullContactList = ({contactList}) => (
<div>
  <ul>
    contactList.map(contact => (
      <li key={contact.id}>
      <Link to ={`/contacts/${contact.id}`}>{contactList.name}</Link>
    ))
  </ul>
</div>

)

export default FullContactList
