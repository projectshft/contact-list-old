import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AllContactList = ({contacts, editContact, deleteContact}) => (

 <div>
    <ul>
      {
        contacts.map(c => (
          <li key={c.id} >
            <Link style={{fontWeight: 'bold'}}to={`/contacts/${c.id}`}>{c.name}</Link>
            {': '}
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={editContact.bind(this)}>edit</span><span> / </span><span style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={deleteContact.bind(this, c.id)}>delete</span>
          </li>
        ))
      }
    </ul>
  </div>
)

   
  
export default AllContactList;   
    