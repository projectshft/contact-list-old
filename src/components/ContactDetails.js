import React, { Component } from 'react';

// Bigtime work-in-progress :(
class ContactDetails extends Component {
  render() {
    return (
      <div className="ContactDetails">
        <h3>I am ContactDetails Component</h3>
        <h3>{this.props.currentContact}</h3>
      </div>
    );
  }
}

export default ContactDetails;
