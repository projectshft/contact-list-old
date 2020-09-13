import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AllContactList = ({ contacts }) => {
  
  this.props.editContact = () => {
    console.log(`edit contact`);
  };

  this.props.deleteContact = () => {
    console.log(`delete contact`);
  };

  return (
  <div>
    contacts.map((contact) => ( contact={this.contact}
    key={this.contact.id} editContact={this.props.editContact} deleteContact=
    {this.props.deleteContact}
    <span style={{ padding: '5px', fontWeight: 'bold' }}>
      <Link to={`/contacts/:${this.contact.id}`}>{this.contact.name}</Link>
    </span>
    <span
      style={{ textDecoration: 'underline', cursor: 'pointer' }}
      onClick={this.props.editContact}>
      edit
    </span>{' '}
    {' / '}
    <span
      style={{ textDecoration: 'underline', cursor: 'pointer' }}
      onClick={this.props.deleteContact}>
      delete
    </span>
    ))
    </div>
  );
};


AllContactList.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default AllContactList;
