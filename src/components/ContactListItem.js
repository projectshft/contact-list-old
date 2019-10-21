import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ContactListItem extends Component {

  handleDeleteClick = () => {
    this.props.deleteContact(this.props.id)
  }

  handleEditClick = () => {
    alert("Whoops. This feature never made it :(")
  }

  render() {
    //Each contact is created with a link to their own contact details page
    return (
      <li className="ContactListItem">
        <Link to={`/contacts/${this.props.id}`}>{this.props.name}</Link>
        <button onClick={this.handleEditClick} type="button" className="btn btn-link">Edit</button>
        <button onClick={this.handleDeleteClick} type="button" className="btn btn-link">Delete</button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default ContactListItem;