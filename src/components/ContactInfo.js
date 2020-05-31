import {  Link } from 'react-router-dom';
import React from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash'
import PropTypes from 'prop-types';



 /* this is the Contact Info component that we route to, making it look like we're
  on a new page. The props we sent from App.js are the contacts array and the 
  contactId */
  const ContactInfo = ({contactId, contacts}) => {
    
    /* We passed in the id of the element that was clicked and now we find the
     matching contact by that id to display (using the lodash find method) */
    const contact = _.find(contacts, { id: contactId });
    
    //error handling for if the contact isn't found
    if (!contact) {
      return <div>Sorry, but the contact was not found</div>
    }
  
    // We will return the jsx that will render the contact info page
    return (
      <div>
        <div className="row offset-md-1 heading">
          <h1>{contact.name}</h1>
        </div>
        <div className="row offset-md-1">
          <h3>Email: {contact.email}</h3>
        </div>
        <div className="row offset-md-1">
          <h3>Phone: {contact.phone}</h3>
        </div>
        <div className="row offset-md-1">
          <img src={contact.img} />
        </div>
        <div className="row offset-md-1">
          <button><Link to="/contact">Back</Link></button>
        </div>
      </div>
    )
  
}

//we want to validate that we're receiving an array of objects for the contacts prop and also that the contactId prop is a number
ContactInfo.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  contactId: PropTypes.number.isRequired
}

export default ContactInfo


