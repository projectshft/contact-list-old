import { Link } from 'react-router-dom'
import React, {Fragment} from 'react'
import {getState} from '../state'

const FullContact = () => {
  if (!getState('selectedContact')) {
    return <h1>No contact with that ID is available</h1>
  }

  const {name, image_url, email, phone_number, id} = getState('selectedContact');
  const editUrl = `/contacts/${id}/edit`;
  return (
    <Fragment>
    <h1>{name} </h1>
    <h2> {email}</h2>
    <Link to='/contacts'>Back</Link>
    <Link to={editUrl}>Edit Contact</Link>
    </Fragment>
  )
}

export default FullContact
