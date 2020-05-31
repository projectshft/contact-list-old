import { Link } from 'react-router-dom';
import React from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/ContactInfo.css'


const ContactInfo = ({contactId, contacts}) => {
  //Matching the id parameter in the state to the router contact id
  const contact = _.find(contacts, { id: contactId });
  //sending message to user if they go to the route(contact) that does not exist
  if (!contact) {
    return <div>The contact was not found in the directory.</div>
  }
  return (
    //rendering all of the data in the contacts props
    <div className="row">
      <div className="col-md-3 offset-md-2 mt-5">
        <img className="w-100" src={contact.profileImage}></img>
      </div> 
      <div className="col-md-4 text-left mt-5 contact-details">
        <h1 className="name mb-4">{contact.name}</h1>
        <h3 className="number mb-4">Phone Number: {contact.phoneNumber}</h3>
        <h3 className="email mb-4">Email: {contact.email}</h3>
        
        <a class="btn btn-primary btn-primary"><Link className="text-white" to='/contacts'>Back to Contact List</Link></a>
      </div>

      {/* setting up a link for the user to go back to the full contact list */}
      
    </div>
  )
}

export default ContactInfo