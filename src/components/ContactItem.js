import { Link } from 'react-router-dom';
import React from 'react';
// import PropTypes from 'prop-types';
import _ from 'lodash';

const ContactItem = ({ contactId, contacts }) => {
  const oneContact = _.find(contacts, { id: contactId });

  if (!oneContact) {
    return (
      <div>
        <div>Please try again. That contact was not found</div>
        <Link className='back-text' to='/contacts'>Back</Link>
      </div>
    );
  } else {
  return (
    <div>
      <Link className='back-text' to='/contacts'>Back</Link>
      <br />
      <br/>
      <h4>Name: {oneContact.name}</h4>
      <h4>Telephone: {oneContact.telephone}</h4>
      <h4>Email: {oneContact.email}</h4>
      <img className='contact-photo' src={oneContact.imgSrc} alt='' />
    </div>
    );
  }
};

//Cannot make this required because it might not exist (as tested for above!)
// ContactItem.propTypes = {
//   oneContact: PropTypes.object.isRequired,
// };

export default ContactItem;
