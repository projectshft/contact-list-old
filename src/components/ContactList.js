import React from 'react';
import Person from './Person.js'
import PropTypes from 'prop-types';


const ContactList = ({contacts}) => (
  <div>
   <br/>
    <ul style={{ listStyleType: "none" }}>
      {
        contacts.map(p => (

          //Generating links for each contact
          <li fontSize key={p.id}>
            <Link to={`/contacts/${p.id}`}>{p.name}</Link>&nbsp;&nbsp;&nbsp;   
        <button type="button" className="btn btn-xs btn-warning edit-contact">Edit</button>&nbsp;&nbsp;  
        <button type="button" className="btn btn-xs btn-secondary delete-contact">Delete</button><br/><br/>
          </li>
        ))
      }
    </ul>
    <br/>

  </div>
)

// Using propTypes for prop validation

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;
