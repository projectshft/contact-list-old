import React from 'react';
import { Link } from 'react-router-dom';

const DetailView = props => {
  const currentContact = props.contacts.find(
    contact => contact.id === props.match.params.id
  );

  return (
    <div>
      <div className="row detail-view pt-5">
        <div className="headshot-container col-6 p-0 mr-auto">
          {currentContact.image_url !== undefined && (
            <img className="headshot" src={currentContact.image_url} alt="" />
          )}
        </div>
        <div className="contact-info col-6 ml-auto">
          <h4>Name:</h4>
          <p className="ml-4">
            {currentContact.fname} {currentContact.lname}
          </p>
          <h4>Phone:</h4>
          <p className="ml-4">{currentContact.phone}</p>
          <h4>Email:</h4>
          <p className="ml-4">{currentContact.email}</p>
        </div>
      </div>
      <Link to="/">Back to Contacts</Link>
    </div>
  );
};

export default DetailView;
