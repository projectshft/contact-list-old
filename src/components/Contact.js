import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

//each individual contact
class Contact extends Component {
  render() {
    return (
      <ul>
        <li class="col-12 col-md-6 col-lg-3">
          <div class="contact-card">
            <img className="img-responsive" atl="" src={this.props.img} />
            <h3><Link to="/contacts/">{this.props.name}</Link></h3>
          </div>
        </li>
      </ul>

    )
  }
}

Contact.proptypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  imgUrl: PropTypes.string
}

export default Contact;
