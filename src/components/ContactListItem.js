import React, { Component } from 'react';

class ContactListItem extends Component {
  render() {
    return (
      <li className="ContactListItem">
        <p>{this.props.name}</p>
      </li>
    );
  }
}

export default ContactListItem;
