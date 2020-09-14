import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types'; 
import _ from 'lodash';

//contactId and contacts props were delivered by Router and are taken in here.
const ContactItem = ({ contactId, contacts }) => {
  //Lodash find method searches the contacts array for an id match
  //between a current contact and the selected id. This assigns that
  //matched contact object to a variable.
  const oneContact = _.find(contacts, { id: contactId });

  if (!oneContact) {
    //This is most likely to happen on page refresh when newly added contacts are purged.
    return (
      <div>
        <Link className='back-text' to='/contacts'>Back</Link>
        <br />
        <br />
        <div>Please try again. That contact was not found</div>
      </div>
    );
  } else {
    return (
    //Displays data for the matched contact.
    <div>
      <Link className='back-text' to='/contacts'>Back</Link>
      <br />
      <br/>
      <h4>Name: {oneContact.name}</h4>
      <h4>Telephone: {oneContact.telephone}</h4>
      <h4>Email: {oneContact.email}</h4>
      <img className='contact-photo' src={oneContact.imgSrc} alt='Photo needed!'/>
    </div>
    );
  }
};

//Requires that the contacts prop is an arry
ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
};
ContactItem.propTypes = {
  contactId: PropTypes.number.isRequired,
}

export default ContactItem;
