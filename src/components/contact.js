import React from 'react';
import UpdateContactForm from './update_contact_form'
import _ from 'lodash'


const Contact = ({props, contacts}) => {
  const contact = _.find(props.contacts, {id:parseInt(props.match.params.id, 10) })

  //test with console log to be sure click function is being invoked
//onClick, pass props to callback function called deleteContact(contact) which is on App.js - key passed in references the index of the current state's contacts array (also in app.js)
  const handleDeleteButtonClick = () =>{
    console.log('delete button was clicked!');
    console.log(props)
    props.deleteContact(props.contact.id)
  }

/*
  return:
  ** jsx format for contact detail with name, image, email
  ** onClick function invocations
*/

  return (
    <div>
    <h1>helloooo</h1>
        <span>
          {contacts.contact.name} -
          <img src={props.contact.image}/>  -
        </span>
        <p>{props.contact.phone}</p>
        <p>{props.contact.email}</p>

          <button type="button" aria-label="Close" onClick={handleDeleteButtonClick}>
          <span aria-hidden="true">&times; delete </span>
          </button> -
    </div>
  )
}


export default Contact
