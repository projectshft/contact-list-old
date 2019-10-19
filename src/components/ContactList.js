import React, { Component } from 'react';
import ContactListItem from './ContactListItem';
import { Link } from 'react-router-dom';

class ContactList extends Component {
  render() {
    return (
      <div className="ContactList">
        <h1>Contact List</h1>

        <ul>
          {//Loops through all contacts and adds each as an 'li' element
            this.props.contacts.map(c => (
            <ContactListItem 
            name={c.name}
            id={c.id}
            key={c.id} />
          ))}
        </ul>

        <Link to="/contacts/new">
          <button type="button" className="btn btn-primary">Add New Contact</button>
        </Link>
      </div>
    );
  }
}

export default ContactList;