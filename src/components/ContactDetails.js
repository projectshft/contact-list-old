import { Link } from 'react-router-dom'
import React from 'react';
import _ from 'lodash'

const ContactDetails= ({routerProps, contacts}) => {
  //find selected contact in the state
  const contact = _.find(contacts, { id: parseInt(routerProps.match.params.contactId) });


  //if no contact exists, display an error
  if (!contact) {
    return <div>Sorry, but that contact was not found</div>
  }

  return (
    <div className="card">
      <Link to="/">
        <i className="fas fa-arrow-alt-circle-left"style={{ fontSize: '30px', color: "navy"}}></i>
      </Link>
      <img className="card-img-top" alt="" src={contact.imgUrl}></img>
      <div className="card-body">
        <h2 className="card-title" style={{ textAlign: 'center' }}>{contact.name}
        </h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email: {contact.email}</li>
        <li className="list-group-item">Phone: {contact.phone}</li>
      </ul>
    </div>
  )
}
export default ContactDetails