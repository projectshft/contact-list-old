import { Link } from 'react-router-dom'
import React from 'react';
import _ from 'lodash';
//implement jsx for contact items
const ContactItem = ({props, contacts, match})=>{
  const contact= _.find(contacts, {id: parseInt(match.params.id, 10)});

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
    //return all contact keys
    <div>
    <h3>Name:{contact.name}</h3>
    <h3>Profile Pic Url:{contact.image_url}</h3>
    <h3>Phone Number:{contact.phoneNumber}</h3>
    <h3>email:{contact.email}</h3>
    <Link to='/'>Return</Link>
    </div>
  )
}
export default ContactItem;
