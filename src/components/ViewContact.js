import React from 'react';
import { Link } from 'react-router-dom';

const ViewContact = ({ contactList, match: { params: { id } } }) => {
  const contactId = parseInt(id, 10);
  const contactFound = contactList.find(function (user) {
    return user.id === contactId;
  });

  console.log('contact', contactFound)

  return (
    <div>
      <Link to="/contact">Go Back</Link>
      <img src={contactFound.imageUrl} alt="profile" />
      <h1>{contactFound.name}</h1>
      <h3>email: {contactFound.email}</h3>
      <h3>phone number: {contactFound.phone_number}</h3>
    </div>
  )
}

export default ViewContact;