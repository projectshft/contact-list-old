import { Link } from 'react-router-dom'
import React from 'react';




const Contact = ({props, contacts}) => {
const {id} = props.match.params;
console.log(id)
const contact = contacts.find(contact => Number(contact.id) === Number(id))
console.log(contact)
//This is supposed to return the info of the contact whose link you clicked on. You will be able to go back to the main page whether you get the contact results or not. 
  if (!contact) {
    return <div>Sorry, but the contact was not found <Link to='/'>Roster</Link></div> 
  }

  return(
      <div>
        <h1>Name: {contact.name}</h1>
         <img src={contact.image_url} alt="Img" height="100" width="100" />
        <h2> email: {contact.email}</h2>
        <h3>number: {contact.phone_number}</h3>
        <Link to='/'>Roster</Link>
      </div>
  )
}

export default Contact
