import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './ContactDetails.css'

class ContactDetails extends Component {

  render() {
    // Retrieves current list of contacts & ID in URL
    const contacts = this.props.contacts;
    const currentContactId = this.props.match.params.id;

    // Converts URL id to appropriate data type for comparison
    // Checks contacts for specified ID and sets it if found
    const foundContactInfo = contacts.filter(c => c.id === parseInt(currentContactId))

    // Returns error if no corresponding id found in the contact list
    if (foundContactInfo.length === 0) {
      return (
        <h3>Oops! Contact not found.</h3>
      )
    }

    return (
      <div className="ContactDetails">
        <Link to="/contacts">
          <button type="button" className="btn btn-primary btn-sm">Back to Contacts</button>
        </Link>
        <img src={foundContactInfo[0].image} />
        <h5>Name: {foundContactInfo[0].name}</h5> 
        <h5>Email: {foundContactInfo[0].email}</h5> 
        <h5>Phone: {foundContactInfo[0].phone}</h5> 
      </div>
    );
  }
}

//Checks if contacts array passed down with correct types
ContactDetails.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    image: PropTypes.string
  })
  )
}

export default ContactDetails;
