import React, { Component } from 'react';

class Contact extends Component {
  render() {
    // Use destructuring to pull out data. Is id necessary here?
    const { id, name, image_url, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Image: {image_url}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
