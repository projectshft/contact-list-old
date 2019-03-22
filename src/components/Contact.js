import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  render() {
    const { avatar, name } = this.props.contact;

    return (
      <div>
        <p>{avatar}</p>
        <h4>{name}</h4>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
