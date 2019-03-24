import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DetailView = props => {
  const currentContact = props.contacts.find(
    contact => contact.id === props.match.params.id
  );

  // The most basic of validation...
  if (currentContact === undefined) {
    return (
      <div>
        <h1>There has been a problem. Please try again.</h1>
        <Link to="/">Back to Contacts</Link>
      </div>
    );
  }

  return (
    <div className="container-fluid pt-3">
      <Link to="/">Back to Contacts</Link>
      <div className="row detail-view pt-5">
        <div className="headshot-container col-6 mr-auto">
          <img className="headshot" src={currentContact.image_url} alt="" />
        </div>
        <div className="contact-info col-6 ml-auto">
          <h4>Name:</h4>
          <p className="ml-4">
            {currentContact.fname} {currentContact.lname}
          </p>
          <h4>Phone:</h4>
          <p className="ml-4">{currentContact.phone || 'N/A'}</p>
          <h4>Email:</h4>
          <p className="ml-4">{currentContact.email}</p>
        </div>
      </div>
    </div>
  );
};

DetailView.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default DetailView;
