import React, { Component } from 'react';

class ContactDetails extends Component {

  render() {
    const contacts = this.props.contacts;
    const currentContactId = this.props.match.params.id;
    return (
      <div className="ContactDetails">
        <h3>I am ContactDetails Component</h3>
        <h3>My Id is {currentContactId}</h3>
      </div>
    );
  }
}

export default ContactDetails;
