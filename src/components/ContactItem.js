import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ContactItem = ({contactId, contacts}) => {
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (
    <div>
      <h1>{contacts.name}</h1>
      <h2>Telephone: {contacts.email}</h2>
      <h2>Email: {contacts.email}</h2>
      <img src={contacts.imgSrc} alt=''/>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}


ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
  };
  
  export default ContactItem

