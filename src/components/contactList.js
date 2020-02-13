import { Switch, Route, Link } from 'react-router-dom'
import React from 'react';

const ContactList = ({contacts}) => {


  return (
  <div>
    {contacts.map(c => (
      <div key={c.id}>
        <Link to={`/contacts/${c.id}`}>{c.name}</Link>
        <a href='#'> Delete </a>
        <a href='#'> Edit </a>
      </div>

    ))}

  </div>
  )
}

export default ContactList
