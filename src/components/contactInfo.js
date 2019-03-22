import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

// This component displays one individuals full contact info

const ContactInfo = ({contacts, routerProps}) => {
  const contact = _.find(contacts, { id: parseInt(routerProps.match.params.id, 10) });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }

  return (
    <div>
      <h3>{contact.firstName} {contact.lastName}</h3>
      <img src={contact.imageURL}></img>
      <h5>Email: {contact.email}</h5>
      <h5>Phone: {contact.phone}</h5>
      <h5>Image: {contact.imageURL}</h5>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default ContactInfo;