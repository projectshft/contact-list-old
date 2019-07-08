import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ContactForm from './ContactForm';

const NewContact = ({props, addContact}) => (
  <div>
    <ContactForm props={props} addContact={addContact}/>
    <Link to='/contacts'>Cancel</Link>
  </div>
);

NewContact.propTypes = {
  props: PropTypes.object,
  addContact: PropTypes.func
};

export default NewContact;