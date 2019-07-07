import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({props, contacts}) => {
  const contact = _.find(contacts, { id: parseInt(props.match.params.number, 10) });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (
    <div>
      <Link to="/contact-list">Back</Link>
      <div>
        <img src={contact.image_URL}></img>
      </div>
      <h1>{contact.name}</h1>
      <div>
      Phone #: {contact.phoneNumber}
      <br />
      Email: {contact.email}
      </div>
      <br />
      Quote: {contact.quote}
    </div>
  )
}

export default Contact
