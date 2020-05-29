import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <Link to='/contacts/new'>
          <button type='button'>Add New Contact</button>
        </Link>
      </div>
    )
  }
}

export default ContactList
