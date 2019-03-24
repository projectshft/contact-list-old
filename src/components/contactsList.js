import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt);

/* This component takes in the contacts state, maps through each one, and displays a list of the
   current contacts in your list */

const ContactsList = ({contacts, deleteContact}) => (
  <div className='container'>
    <center>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
          <div className="card shadow" style={{width: '24rem', marginTop: 40, marginLeft: 40, background: 'cornflowerblue'}}>
            <div className="card-header">
              My Contact List
            </div>
            <ul className="list-group list-group-flush">
              { contacts.sort(compare).map(contact => (
                  <li className="list-group-item" key={contact.id}>
                    <Link to={`/contacts/${contact.id}`}>{contact.lastName}, {contact.firstName}</Link>
                    <span style={{float: 'right'}}><FontAwesomeIcon icon="trash-alt" onClick={() => deleteContact(contact)}/></span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className='col-2'></div>
      </div>      
      <Link to="/contacts/new">Add Contact</Link>
    </center>
  </div>
);

// This function allows the contacts array to be sorted alphabetically by last name

function compare (a, b) {
  const lastNameA = a.lastName.toUpperCase();
  const lastNameB = b.lastName.toUpperCase();

  let comparison = 0;
  if (lastNameA > lastNameB) {
    comparison = 1;
  } else if (lastNameA < lastNameB) {
    comparison = -1;
  }
  return comparison;
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default ContactsList;