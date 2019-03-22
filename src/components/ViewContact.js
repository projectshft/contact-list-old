import React from 'react';
import { Link } from 'react-router-dom';

const ViewContact = ({ contactList, match: { params: { id } } }) => {
  const contactId = parseInt(id, 10);
  const contactFound = contactList.find(function (user) {
    return user.id === contactId;
  });

  return (
    <div>
      <Link to="/contact">Go Back</Link>
      <h1>{contactFound.name}</h1>
      <h3>{contactFound.email}</h3>
      <h1>{contactFound.phone_number}</h1>
      <img src="{contactFound.image_url}" />
    </div>
  )
}

export default ViewContact;