import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  style = () => {
    return {
      width: '80px',
      height: 'auto',
      borderRadius: '20px',
      padding: '10px 10px',
      marginRight: '-10px'
    };
  };

  render() {
    const { avatar, name, id } = this.props.contact;
    return (
      <div className="bg-dark mb-3" style={{ borderRadius: '5px' }}>
        <div className="row align-items-center">
          <div className="col-auto">
            <img src={avatar} alt="avatar" style={this.style()} />
          </div>
          <div className="col align-middle">
            <h3 id={id} style={{ color: '#fff', cursor: 'pointer' }}>
              {name}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
