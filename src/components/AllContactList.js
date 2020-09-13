import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AllContactList = ({contacts, editContact, deleteContact}) => (

 <div>
    <ul>
      {
        contacts.map(contact => (
          <li key={contact.id} contact={contact}>
            <Link style={{fontWeight: 'bold'}}to={`/contacts/${contact.id}`}>{contact.name}</Link>
            {': '}
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={this.props.editContact.bind(this)}>edit</span><span> / </span><span style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={this.props.deleteContact.bind(this, contact.id)}>delete</span>
          </li>
        ))
      }
    </ul>
  </div>
)

  
AllContactList.propTypes = {
  contact: PropTypes.object.isRequired,
};
       
  
export default AllContactList;




          {/* <li style={{ padding: '5px', fontWeight: 'bold' }} key={c.id}>
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={this.props.editContact}>
          edit
 
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={this.props.deleteContact}>
              delete       */}



    
    