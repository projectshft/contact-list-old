import React from 'react'
import ContactsRow from './ContactsRow'

const ContactsTable = ({contacts}) => {
    return (
      <tbody>
        <ContactsRow contacts={contacts}/>
      </tbody>
  )
}

export default ContactsTable
