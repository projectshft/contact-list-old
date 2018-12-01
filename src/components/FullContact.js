import { Link } from 'react-router-dom'
import React, {Fragment} from 'react'
import {getState, sendEvent} from '../state'

const FullContact = () => {
  //first make sure it's been linked to by a valid ID
  if (!getState('selectedContact')) {
    return <h1>No contact with that ID is available</h1>
  }

  const {name, image_url, email, phone_number, id} = getState('selectedContact');
  const editUrl = `/contacts/${id}/edit`;

  return (
    <Fragment>
    <h1>{name} </h1>
    <div className="row">
    <div className="col">
    <img className="full-contact-img" src={image_url} alt={name}></img>
    </div>
    <div className="col">
    <h2><strong>Email: </strong>{email}</h2>
    <h2><strong>Phone: </strong>{phone_number}</h2>
    <Link to='/contacts' className="btn btn-warning back-btn" onClick ={() => sendEvent('setSelectedContact', null)}>Back</Link>
    <Link className="btn btn-success" to={editUrl}>Edit Contact</Link>
    </div>
    </div>
    </Fragment>
  )
}

export default FullContact
