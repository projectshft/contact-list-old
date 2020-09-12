import { Component } from 'react';
import React from 'react';

class AddContactButton extends Component {
  constructor() {
    super();

    this.handleAddContact = this.handleAddContact.bind(this);
  }

  handleAddContact() {
    console.log('clicked');
  }

  render() {
    return (
      <button
        type='button'
        className='add-contact'
        style={{ display: 'inline-block' }}
        onClick={this.handleAddContact}>
        Add Contact
      </button>
    );
  }
}

export default AddContactButton;
