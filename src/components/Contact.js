import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//each individual contact
class Contact extends Component {
  render() {
    return (
        <li className="col-12 col-md-6 col-lg-3">
          <div className="contact-card">
            <img className="img-responsive" atl="" src={this.props.img} />
            <h3><Link to={`/contact/${this.props.id}`}>{this.props.name}</Link></h3>
          </div>
        </li>

    )
  }
}

export default Contact;
