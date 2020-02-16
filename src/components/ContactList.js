import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import $ from 'jquery'

import ContactDetail from './ContactDetail'


export default function ContactList(props) {

  useEffect(() => {
    //hide back button on the list
    $('.backToList').hide()
  }, [])

  return (
    <div>
    <h2>Contacts</h2>
    <div id="addBtn"><Link to='/contacts/add'> <Button variant="outlined">Add Contact</Button></Link></div>
      <div className="contact-list">
        { props.contacts.map(contact => {
          return (
            <ContactDetail
              key={contact.id}
              contactId={contact.id} 
              contacts={props.contacts}
            />
          )
        })}   
      </div>
    </div>
  )

  ContactList.propTypes = {
    contact: PropTypes.object.IsRequired
  };
}
