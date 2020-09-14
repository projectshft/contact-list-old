import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//contacts, editContact, deleteContact props were delivered by Router and are taken in here.
const AllContactList = ({ contacts, editContact, deleteContact }) => {

  //TO FIX: edit and delete functionality (beginning below but also in App.js) for each contact.
  //  editContact(anId) {
  //    console.log(`edit contact from app`);
  //  }

  //   deleteContact(anId) {
  //  console.log('delete from app');
  // }

  return (
    <div>
      <ul>
        {contacts.map((c) => (
          //Map function cycles through the array of contacts and displays them by name.
          //The link element wrapping the contact name leads to a details page identified by contact ID.
          //The span elements display edit and delete text that is not functional.
          <li key={c.id}>
            <Link className='view-contact-link' to={`/contacts/${c.id}`}>
              {c.name}
            </Link>
            {': '}
            <span
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={editContact}>
              edit
            </span>
            <span> / </span>
            <span
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={deleteContact}>
              delete
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

//Requires that the contacts prop is an array
AllContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
AllContactList.propTypes = {
  editContact: PropTypes.string.isRequired
};
AllContactList.propTypes = {
  deleteContact: PropTypes.string.isRequired
};

export default AllContactList;
