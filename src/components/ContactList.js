import React, { Component } from 'react';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
  render() {
    return (
      <div className="ContactList">
        <h1>Contact List</h1>
        <ul>
          {this.props.contacts.map(c => (
            <ContactListItem name={c.name} />
          ))}
        </ul>
        <a href="/contacts/new" className="btn btn-primary">Add Contact</a>
      </div>
    );
  }
}

export default ContactList;