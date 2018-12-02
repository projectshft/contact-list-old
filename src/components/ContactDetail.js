import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const ContactDetail = ({routerProps, contact, deleteContact}) => {
  // Deletes contact then redirects to contacts page
  const handleClick = () => {
    deleteContact(contact);
    routerProps.history.push('/contacts');
  }

  return (
    <Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
          <div className="card contact-details">
            <img className="card-img-top contact-image" src={contact.image} alt={`${contact.name}`} />
            <div className="card-body">
              <h5 className="card-title contact-name">{contact.name}</h5>
              <p className="card-text contact-email">{contact.email}</p>
              <p className="card-text contact-phone">{contact.phone}</p>
              <Link className="btn btn-sm btn-primary mr-2" to={`/contacts/${contact.id}/edit`}>Edit</Link>
              <button className="btn btn-sm btn-danger mr-2" onClick={handleClick}>Delete</button>
              <Link className="btn btn-sm btn-secondary" to={`/contacts`}>Back</Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactDetail;