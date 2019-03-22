import React, { Component } from 'react';
import PropTypes from 'prop-types';

//each individual contact
class Contact extends Component {
  render() {
    return (
      <div className= "card card-body mb-3">
        <h4>{this.props.name}</h4>
        <ul className="list-group">

          <li className="list-group-item">
            <img className="img-responsive" src={this.props.img} />
          </li>

          <li className="list-group-item">Phone: {this.props.phone}
          </li>
          
          <li className="list-group-item">Email: {this.props.email}
          </li>

        </ul>
      </div>
    )
  }
}

Contact.proptypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  img_url: PropTypes.string
}

export default Contact;
