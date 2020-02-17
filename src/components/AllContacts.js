import React from 'react';
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

//AllContacts renders a list of all of the users Contacts
const AllContacts = ({contacts, deleteContact}) => {

  return (
    <div className="row">
      <div className="col col-sm-3"></div>
      <div className="col col-sm-8 col-md-6">
        {/* Render page header */}
        <h2 className="header">Contacts</h2>
        <div>
          {
            /* Loop through contacts and render them to the page one by one */
            contacts.map( c => (
              <div className="row contact-row" key={c.id}>
                <span className="col col-sm-6">
                  {/* Render the contact name - clicking on the contact's name will take you to */}
                  {/* that contact's contact page. */}
                  <Link to={`/contacts/${c.id}`}>
                    <span>{c.name}</span>
                  </Link>
                </span>
                {/* Render edit and delete buttons */}
                <span className="col col-sm-6">
                  <Link to={`/contacts/${c.id}/edit`}><button className="btn btn-primary contact-list-button">Edit</button></Link>
                  <button className="btn btn-primary contact-list-button" onClick={event => deleteContact(c.id)}>Delete</button>
                </span>
              </div>
            ))
          }
        </div>
        {/* Below the contact lits render a "New Contact" button */}
        <div className="row">
          <div className="col col-sm-3"></div>
          <div className="col col-sm-6">
            {/* New Contact Button */}
            <button className="btn btn-outline-primary add-contact"><Link to="/contacts/new">New Contact</Link></button>
          </div>
          <div className="col col-sm-3"></div>
        </div>
      </div>
      <div className="col col-sm-3"></div>
    </div>
  )
}

//Require deleteContact be a function
//And contacts to be an array
AllContacts.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
}

export default AllContacts;
