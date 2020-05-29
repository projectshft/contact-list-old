import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class ContactList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <Link to='/contacts/new'>
          <button type='button' className='btn btn-primary'>Add New Contact</button>
        </Link>
        <ul>
        </ul>
      </div>
    )
  }
}

export default ContactList
