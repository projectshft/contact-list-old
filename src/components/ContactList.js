import React, { Component } from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <React.Fragment>
        {contacts.map(index => (
          <Contact
            key={index.id}
            contact={index}
            focusContact={this.props.focusContact}
          />
        ))}
      </React.Fragment>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;
