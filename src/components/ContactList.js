import React, { Component } from 'react';
import ContactListItem from './ContactListItem';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

//Checks if contacts array passed down with correct types
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    image: PropTypes.string
  })
  )
}

export default ContactList;