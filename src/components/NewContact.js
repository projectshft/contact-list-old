import React, { Component } from 'react';
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
  addContact: PropTypes.func
};

 //chance of collisions pretty low
const generateId = () => Math.round(Math.random() * 100000000)

export default NewContact;