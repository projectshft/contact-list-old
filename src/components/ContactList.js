import React, { Component } from 'react';
import ContactListItem from './ContactListItem';
import { Link } from 'react-router-dom'

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
            key={c.id} />
          ))}
        </ul>
        <Link to="/contacts/new">Add New Contact Info</Link>
      </div>
    );
  }
}

export default ContactList;