import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class NewContact extends Component {
  constructor() {
    super();

    this.newContact = {
      id: 0,
      name: '',
      email: '',
      phoneNumber: ''
    };
  }

  render() {
    console.log('wtf');
    return (
      <div>sup</div>
    )
  }
}

NewContact.propTypes = {
  addContact: PropTypes.func
};

export default NewContact;