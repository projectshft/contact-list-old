import React from 'react';
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const AllContacts = ({contacts, deleteContact}) => {

  return (
    <div className="row">
      <div className="col col-sm-3"></div>
      <div className="col col-sm-8 col-md-6">
        <h2 className="header">Contacts</h2>
        <div>
          {
            contacts.map( c => (
              <div className="row contact-row" key={c.id}>
                <span className="col col-sm-6">
                  <Link to={`/contacts/${c.id}`}>
                    <span>{c.name}</span>
                  </Link>
                </span>
                <span className="col col-sm-6">
                  <Link to={`/contacts/${c.id}/edit`}><button className="btn btn-primary contact-list-button">Edit</button></Link>
                  <button className="btn btn-primary contact-list-button" onClick={event => deleteContact(c.id)}>Delete</button>
                </span>
              </div>
            ))
          }
        </div>
        <div className="row">
          <div className="col col-sm-3"></div>
          <div className="col col-sm-6">
            <button className="btn btn-outline-primary add-contact"><Link to="/contacts/new">New Contact</Link></button>
          </div>
          <div className="col col-sm-3"></div>
        </div>
      </div>
      <div className="col col-sm-3"></div>
    </div>
  )
}

AllContacts.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
}

export default AllContacts;
