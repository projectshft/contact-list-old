import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

// This component displays one individuals full contact info

const ContactInfo = ({contacts, routerProps}) => {
  const contact = _.find(contacts, { id: parseInt(routerProps.match.params.id, 10) });

  if (!contact) {
    return (
      <div>
        <h3>Sorry, but the contact was not found</h3>
        <Link to='/contacts'>Back To Contact List</Link>
      </div>
    )
  }

  return (
    <div>
      <div className="h-100 d-flex justify-content-center">
        <div className="card mb-3 shadow rounded" style={{maxWidth: 540, marginTop: 40, background: '#c7dfff', border: '1.5px solid black'}}>
          <div className="row no-gutters align-items-center">
            <div className="col-md-4">
              <img src={contact.imageURL} className="card-img" alt="Contact"></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{contact.firstName} {contact.lastName}</h3>
                <p className="card-text">Phone: {contact.phone}</p>
                <p className="card-text">Email: {contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
      <Link to='/contacts'>Back To Contact List</Link>
      </div>
    </div>
  )
}

ContactInfo.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.object.isRequired
};

export default ContactInfo;