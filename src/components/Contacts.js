import React from 'react';

function Contacts(props) { //Working on building out Contacts as a ul
  return (
    <div>
    <h1>Contacts</h1>
    <button type="button" className="btn btn-primary">Add Contact</button>
    <ul className="list-group">
    {props.contacts.map(contact => {
      return <li key={contact.id}>{contact.name}</li>}
    )}
    </ul>
    </div>
  )
}

export default Contacts;