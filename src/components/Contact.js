import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Contact extends Component {
  style = () => {
    return {
      width: '80px',
      height: 'auto',
      borderRadius: '20px',
      padding: '10px 10px',
      marginRight: '-10px',
      cursor: 'pointer'
    };
  };

  render() {
    const { avatar, name, id } = this.props.contact;
    return (
      <div className="bg-dark mb-3" style={{ borderRadius: '5px' }}>
        <Link to={`/contact/${id}`}>
          <div className="row align-items-center">
            <div className="col-auto">
              <img
                src={avatar}
                alt="avatar"
                style={this.style()}
                onClick={this.props.focusContact.bind(this, id)}
              />
            </div>
            <div className="col align-middle">
              <h3
                id={id}
                style={{ color: '#fff', cursor: 'pointer' }}
                onClick={this.props.focusContact.bind(this, id)}
              >
                {name}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
