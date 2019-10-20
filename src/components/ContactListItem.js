import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ContactListItem extends Component {
  render() {
    //Each contact is created with a link to their contact details
    return (
      <li className="ContactListItem">
        <Link to={`/contacts/${this.props.id}`}>{this.props.name}</Link>
      </li>
    );
  }
}


ContactListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default ContactListItem;