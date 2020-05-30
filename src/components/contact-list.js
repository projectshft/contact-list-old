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
          {this.props.contacts.map(contact => (
            <li key={contact.key}>
              <Link to='/contacts/${contact.key}' className='customer-list'>{contact.name}</Link><a href='#' className="edit">edit</a><a href='#' className="delete">delete</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ContactList
