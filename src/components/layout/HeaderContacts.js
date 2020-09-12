import React from 'react'

export default function HeaderContacts() {
  return (
    <div>
      <h1 style={{ display: 'inline-block' }}>Contacts</h1>
      <button style={{ display: 'inline-block' }} onClick={console.log("clicked")}>Add Contact</button>
    </div>
  )
}

