import React from 'react';
import UpdateContactForm from './update_contact_form'


const Contact = (props) => {

//test with console log to be sure click function is being invoked
//onClick, pass props to callback function called deleteContact(contact) which is on App.js - key passed in references the index of the current state's contacts array (also in app.js)
  const handleDeleteButtonClick = ({key}) =>{
    console.log('delete button was clicked!');
    console.log(props)
    props.deleteContact(key)
  }

  //test with console log to be sure click function is being invoked and accessing the correct Object
  //onClick, pass props to callback function called updateContact(contact) which is on App.js - key passed in references the index of the current state's contacts array (also in app.js)
  const handleEditButtonClick = ({key}) =>{
    props.updateContact(key);
    console.log(props);
  }

  //test with console log to be sure click function is being invoked and accessing the correct Object
  //onClick, pass props to callback function called showContactDetail(contact) which is on App.js - key passed in references the index of the current state's contacts array (also in app.js)
  const handleContactDetailClick = ({key}) =>{
    props.showContactDetail(key);
    console.log(props);
  }


/*
  return:
  ** jsx format for contact detail with name, image, email
  ** onClick function invocations
*/

  return (
    <div>
      <li>
        <span>
          {props.contact.name} -
          <img src="{props.contact.image}"/>  -

          <button type="button" aria-label="Close" onClick={handleDeleteButtonClick}>
          <span aria-hidden="true">&times; delete </span>
          </button> -

          <button type="button" aria-label="Close" onClick={handleEditButtonClick}>
          <span aria-hidden="true">edit</span>
          </button>-

          <button type="button" aria-label="Close" onClick={handleContactDetailClick}>
          <span aria-hidden="true">Details</span>
          </button>

        </span>
        <p>{props.contact.phone}</p>
        <p>{props.contact.email}</p>
      </li>


    </div>
  )
}


export default Contact
