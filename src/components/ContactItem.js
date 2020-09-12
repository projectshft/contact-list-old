import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddContactButton from './AddContactButton';

class ContactItem extends Component {
  render() {
    // destructuring to use the keys (id, name) below
    const { id, name } = this.props.contact;
    return (
      <div className='container contact-item'>
        <div className='row'>
          <div class='col-md-3 offset-md-2' style={{ fontWeight: 'bold' }}>
            {name}
          </div>
          <div
            class='col-md-1 '
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={this.props.editContact.bind(this, id)}>
            edit
          </div>
          <div
            class='col-md-1 '
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={this.props.deleteContact.bind(this, id)}>
            delete
          </div>
        </div>
      </div>
   
    );
  }
}

<AddContactButton />

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
