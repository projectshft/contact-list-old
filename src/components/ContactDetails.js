import React from 'react';
import { Link } from 'react-router-dom'
import _ from 'lodash'

const ContactDetails= ({routerProps, players}) => {
  const contact= this.props.contacts.find(c => c.id === routerProps.contactId)
  
  if (!contact) {
    return <div>Sorry, but that contact was not found</div>
  }

  return (
    <div className="card">
      <img className="card-img-top" alt="" src={this.props.img}>
        <div className="card-body">
          <p className="card-text">Email Address: {this.props.email}</p>
          <p className="card-text">Phone Number: {this.props.phone}</p>
        </div>
      </img>
    </div>
  )
}
export default ContactDetails