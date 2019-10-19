import React, { Component } from 'react';

class ContactDetails extends Component {

  render() {
    const contacts = this.props.contacts;
    const currentContactId = this.props.match.params.id;

    const foundContactInfo = contacts.filter(c => c.id === currentContactId)

    // Returns error if no corresponding id found in the contact list
    if (foundContactInfo.length === 0) {
      return (
        <h3>Oops! Contact not found.</h3>
      )
    }

    return (
      <div className="ContactDetails">
        <h3>I am ContactDetails Component</h3>
        <h3>My Id is {currentContactId}</h3>
      </div>
    );
  }
}

export default ContactDetails;
