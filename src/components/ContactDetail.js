import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const ContactDetail = ({props, contacts}) => {
  const contact = _.find(contacts, { id: parseInt(props.match.params.id, 10) });

  if (!contact) {
    return(
      <div className='contact-detail-error'>
        <h1>Sorry, but that contact was not found</h1>
        <Link to='/contacts'>Back to My Contacts</Link>
      </div>
      )
  }

  return (
    <div className='contact-detail'>
      <div className="card">
        <img className="card-img-top" src={contact.image_url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">{contact.phone_number}<br></br>{contact.email}</p>
          <span><a href='/contacts' className="btn btn-primary">Back</a>
          <a href={`/contacts/${contact.id}/edit`} className="btn btn-secondary">Edit</a></span>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail