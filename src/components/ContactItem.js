import { Link } from 'react-router-dom'
import React from 'react';

const ContactItem = ({props, contacts, match})=>{
  const matchContact= _.find(contacts, {id: parseInt(match.params.id, 10)});

  if(!contact){
    return(
      <div>
        <h4>
          Contact not found
        </h4>
        <Link to='/'>Return</Link>
        </div>
    )
  }
  return(
    <div>
      <h3>Name:{contact.name}</h3>
      <h3>image_url:{contact.image_url}</h3>
      <h3>phoneNumber:{contact.phoneNumber}</h3>
      <h3>email:{contact.email}</h3>
      <Link to='/'>Return</Link>
    </div>
  )
}
export default Contact;
