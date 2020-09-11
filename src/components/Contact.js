import { Link } from 'react-router-dom';
import React from 'react';
import _ from 'lodash';

const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return <div>This contact was not found</div>
  }
  return (
    <div>
      <h1>{contact.name} (#{contact.telephone})</h1>
      <h2>Email: {contact.email}</h2>
      <h2>contact image</h2>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}
export default Contact;