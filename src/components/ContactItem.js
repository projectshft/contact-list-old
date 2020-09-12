import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactItem extends Component {

  render() {
    // destructuring to use the keys (id, name) below
    const { id, name } = this.props.contact;
    return (
      <div>
        <span style={{ padding: '5px', fontWeight: 'bold' }}>
          {name} {'     '}
        </span>
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={this.props.editContact.bind(this, id)}>edit</span> {' / '}
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={this.props.deleteContact.bind(this, id)}>delete</span>
      </div>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
