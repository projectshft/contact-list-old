import React from 'react';
import _ from 'lodash'
import { Link } from 'react-router-dom'

const ContactDetails= ({routerProps, contacts}) => {
  const contact= this.props.contacts.find(c => c.id === routerProps.contactId)
  // const contacts = _.find(contacts, { id: (routerProps.match.params.id, 10) });

  
  if (!contact) {
    return <div>Sorry, but that contact was not found</div>
  }

  return (
    <div className="card">
      <Link to="/">
        <i className="fas fa-arrow-alt-circle-left"style={{ fontSize: '30px', color: "navy"}}></i>
      </Link>
      <img className="card-img-top" alt="" src={contact.img}></img>
      <div className="card-body">
        <h2 className="card-title" style={{ textAlign: 'center' }}>{contact.name}
        </h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email: b@gmail.com</li>
        <li className="list-group-item">Phone: 999-999-9999</li>
      </ul>
    </div>
  )
}
export default ContactDetails