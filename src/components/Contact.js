import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';

const Contact = ({contactId, contacts}) => {
console.log(contacts)
  const contact = _.find(contacts, { id: contactId });

  console.log(contact)
  if (!contact) {
    return <div>That contact was not found, please try again.</div>
  }



  return (
    <div className="contact-view">
      <div className="card">
      <div className="row">
        <div className="image-container col-sm-6">
          <img src={contact.image_url} alt={contact.name} height="200" width="300" className="img-thumbnail"></img>
        </div>
        <div className="col-sm-6">
          <div className="card-body-right">
          <h1 className="card-title">{contact.name}</h1>
            <br/>
          <h3>{contact.email}</h3>
            <br/>
          <h3>{contact.phone_number}</h3>
            <br/>
          <Link to='/contacts'>
            <button className="btn btn-primary">Back</button>
          </Link>
          </div>
        </div>
      </div>
        <br/>
      </div>
    </div>
  )
}

// tried name: but kept return undefined even if it was defined
//checks that the properties of Contact are there as both are required
Contact.propTypes = {
  contactId: PropTypes.number,
  contacts: PropTypes.array,
  // contact: PropTypes.object.isRequired

}



export default Contact;
