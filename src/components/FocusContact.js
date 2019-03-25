import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class FocusContact extends Component {
  containerStyle = () => {
    return {
      top: '40px',
      height: 'auto',
      padding: '3rem',
      backgroundColor: 'white',
      borderRadius: '5px'
    };
  };

  render() {
    const { avatar, name, email, phone } = this.props.contact;

    return (
      <div style={this.containerStyle()}>
        <Link to="/contacts" style={{ marginTop: '-20px' }}>
          Back
        </Link>
        <img
          src={avatar}
          alt="avatar"
          style={{
            width: '150px',
            heigth: '150px',
            display: 'block',
            margin: 'auto',
            borderRadius: '10px'
          }}
        />
        <div className="row">
          <div className="col-10-sm">Name: {name}</div>
        </div>
        <div className="row">
          <div className="col-10-sm">Email: {email}</div>
        </div>
        <div className="row">
          <div className="col-10-sm">Phone: {phone}</div>
        </div>
      </div>
    );
  }
}

FocusContact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default FocusContact;
