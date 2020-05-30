import { Link } from 'react-router-dom';
import React from 'react';
import _ from 'lodash';

const ContactInfo = ({contactId, contacts}) => {
  //Matching the id parameter in the state to the router contact id
  const contact = _.find(contacts, { id: contactId });
  //sending alert to user if they go to the route that does not exist
  if (!contact) {
    return <div>The contact was not found in the directory.</div>
  }
  return (
    //rendering all of the data in the contacts props
    <div>
      <h1>{contact.name}</h1>
      <h2>Phone Number: {contact.phoneNumber}</h2>
      <h2>Email: {contact.email}</h2>
      {/* setting up a link for the user to go back to the full contact list */}
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default ContactInfo