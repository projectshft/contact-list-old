import React, { Component } from 'react';

class ContactDetails extends Component {

  render() {
    // Retrieves current list of contacts & ID in URL
    const contacts = this.props.contacts;
    const currentContactId = this.props.match.params.id;

    // Converts URL id to appropriate data type for comparison
    // Checks contacts for specified ID and adds it if found
    const foundContactInfo = contacts.filter(c => c.id === parseInt(currentContactId))

    // Returns error if no corresponding id found in the contact list
    if (foundContactInfo.length === 0) {
      return (
        <h3>Oops! Contact not found.</h3>
      )
    }

    return (
      <div className="ContactDetails">
        <h3>I am ContactDetails Component</h3>
        <h3>My Id is {foundContactInfo[0].id}</h3> 
        <h3>My Name is {foundContactInfo[0].name}</h3> 
        <h3>My Email is {foundContactInfo[0].email}</h3> 
      </div>
    );
  }
}

export default ContactDetails;
