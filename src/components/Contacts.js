import React, { Component } from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    return this.props.contacts.map((contact) => (
      <ContactItem
        key={contact.id}
        contact={contact}
        editContact={this.props.editContact}
        deleteContact={this.props.deleteContact}
      />
    ));
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Contacts;
