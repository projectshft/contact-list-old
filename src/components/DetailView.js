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

  const { image_url, fname, lname, phone, email } = currentContact;

  return (
    <div className="container-fluid pt-3">
      <Link to="/">Back to Contacts</Link>
      <div className="row detail-view pt-5">
        <div className="headshot-container col-6 mr-auto">
          <img
            className="headshot"
            src={
              image_url ||
              // add default image if none available. This could be clickable link to an edit view
              `https://media.giphy.com/media/4HpF1SUYkswfJF6SZu/giphy.gif`
            }
            alt=""
          />
        </div>
        <div className="contact-info col-6 ml-auto">
          <h4>Name:</h4>
          <p className="ml-4">
            {fname} {lname}
          </p>
          <h4>Phone:</h4>
          <p className="ml-4">{phone || 'N/A'}</p>
          <h4>Email:</h4>
          <p className="ml-4">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

DetailView.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default DetailView;
