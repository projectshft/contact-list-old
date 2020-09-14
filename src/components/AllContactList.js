import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AllContactList = ({contacts, editContact, deleteContact, contactId}) => {

  
//  editContact(anId) {
//    console.log(`edit contact from app`);
//  }

//   deleteContact(anId) {
//  console.log('delete from app'); 
// } 
  
  function saveClickedID() {
    console.log(`clicked `);
  }

    return (
      <div>
        <ul>
          {
            contacts.map(c => (
              <li key={c.id}>
                <Link className="view-contact-link" onClick={saveClickedID()} to={`/contacts/${c.id}`}>{c.name}</Link>
                {': '}
                <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={editContact}>edit</span><span> / </span><span style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={deleteContact}>delete</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
}


AllContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
  
export default AllContactList;   
    