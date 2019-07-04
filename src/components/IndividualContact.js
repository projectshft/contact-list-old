import React from 'react';
import { Link } from 'react-router-dom'

const IndividualContact = ({props, contactList}) => {
  console.log(contactList);
  //make a variable which stores the object which contains the id of the url the user wants to navigate to
  const desiredContact = contactList.filter(contact => {
    if ( contact.key == props.match.params.key ) {
      return contact
    }
  })

console.log(desiredContact);
  if (desiredContact.length == 0) {
    return
    <div>
      <h1> Contact not found</h1>
      <button>
        <Link to ='/contacts'>Back</Link>
      </button>
    </div>
  }
    //if url does lead to desired contact, render the properties of the contact
    return (
      <div>
        <button>
        <Link to ='/contacts/'>Back</Link>
        </button>
        <h1>{desiredContact[0].name} </h1>
        <img src={desiredContact[0].image_url} />
        <p> {desiredContact[0].email} </p>
        <p> {desiredContact[0].phone_number}</p>
      </div>
    )
}

export default IndividualContact
