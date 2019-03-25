import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt);  // Enables use of trashcan icon for deleting a contact

/* This component takes in the contacts state, maps through each one, and displays a list of the
   current contacts in your list.  Includes a link to edit a contact and a button to delete a
   contact for each contact in the list */

const ContactsList = ({contacts, deleteContact}) => (
  <div className='container'>
    <center>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
          <div className="card shadow" style={{width: '24rem', marginTop: 50, background: '#c7dfff'}}>
            <div className="card-header">
              My Contact List              
            </div>
            <ul className="list-group list-group-flush">
              {
                contacts.sort(compare).map(contact => (
                  <li className="list-group-item" key={contact.id}>
                    <Link style={{float: 'left'}} to={`/contacts/${contact.id}`}>{contact.lastName}, {contact.firstName}</Link>
                    <span style={{float: 'right'}}>
                      <Link to={`/contacts/${contact.id}/edit`}>Edit</Link>
                      <FontAwesomeIcon style={{marginLeft: 10}} icon="trash-alt" onClick={() => deleteContact(contact)}/>
                    </span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className='col-2'></div>
      </div>
      <br />
      <Link to="/contacts/new">Add New Contact</Link>
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

// Confirms that the props passed to this component are of the expected type

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default ContactsList;