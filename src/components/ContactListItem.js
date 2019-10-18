import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactListItem extends Component {
  render() {
    return (
      <li className="ContactListItem">
        <Link to={`/contacts/${this.props.id}`}>{this.props.name}</Link>
      </li>
    );
  }
}

export default ContactListItem;
