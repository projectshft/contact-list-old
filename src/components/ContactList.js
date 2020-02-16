import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ContactDetail from './ContactDetail'

export default function ContactList(props) {

  return (

      <div className="contact-list">
Contacts List
        { props.contacts.map(contact => {
          return (
            <ContactDetail
              key={contact.id}
              contactId={contact.id} 
              contacts={props.contacts}
            />
          )
        })}   
            
          <div><button><Link to='/contacts/add'>Add Contact</Link></button></div>
      </div>
  )

  ContactList.propTypes = {
    contact: PropTypes.object.IsRequired
  };
}
