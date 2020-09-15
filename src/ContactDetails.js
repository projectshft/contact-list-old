import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';

const ContactDetails = ({keyNo, contacts}) => {
  console.log('in ContactDetails');
  const detailContact = _.find(contacts, { key: keyNo});
  console.log('Contact decoded ', detailContact);
  return (
    <div className="App container">
        <div className="row">
        <header className="App-header">
          <div className="col-md">
           <h1 className="App-title float-left">Contact Details</h1>
          </div>
        </header>
        </div>
           <div className="row mt-3">
          <div className="col-md"><h3 className="float-left">{detailContact.name}</h3><img src={detailContact.image_url} alt="{detailContact.name}" height="128" className="clear-left ml-5" ></img>
          <h4>Phone: {detailContact.phone_number}</h4>
          <p>Email: <a href="mailto:{detailContact.email}">{detailContact.email}</a></p>
          <Link to="/">Home</Link>
          </div>

      </div>
      
    </div>
  )
}
ContactDetails.proptypes = {
  keyNo: PropTypes.number.isRequired,
  contacts: PropTypes.array.isRequired
}
export default ContactDetails