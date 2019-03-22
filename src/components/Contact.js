import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
  render() {
    const { avatar, name, email, phone } = this.props;

    return (
      <div>
        <p>{avatar}</p>
        <h4>Name: {name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
