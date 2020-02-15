import React from 'react'
import { Link } from 'react-router-dom'
import ContactDetail from './ContactDetail'

export default function ContactList(props) {

  return (

      <div className="ui container items">

        { props.contacts.map(contact => {
          return (
            <ContactDetail
              key={contact.id}
              contactId={contact.id} 
              contacts={props.contacts}
            />
          )
        })}   
            
          <div><Link to='/contacts/add'>Add New Contact</Link></div>
      </div>
  )
}
