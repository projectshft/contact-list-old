import { Link } from 'react-router-dom'
import React from 'react';
import _ from 'lodash';




const Contact = ({props, contacts}) => {
  const contact = _.find(contacts, { 'phone_number': props.match.params.phone_number });

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
