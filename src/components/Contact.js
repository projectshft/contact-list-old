import React, { Component } from 'react';

class Contact extends Component {
  render() {
    // Use destructuring to pull out data
    const { name, email, phone } = this.props;
    return (
      <div>
        {/* ************************
        This way prior to inserting the destructuring line above:
        ******************************
        <h4>Name: {this.props.name}</h4>
        <ul>
          <li>Email: {this.props.email}</li>
          <li>Phone: {this.props.phone}</li>
        </ul> 
        ***************************
        Now this way, enabled by the destructuring line above:
        ***************************/}
        <h4>Name: {name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
