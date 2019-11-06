import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const ContactDetail = ({props, contacts}) => {
  const contact = _.find(contacts, { id: parseInt(props.match.params.id, 10) });
//makes sure the contact exists w/ the ID
  if (!contact) {
    return <div>The contact youhas been deleted or edited</div>
  }
  return (
    <div>
      <h1>{contact.name}</h1>
      <h1>{contact.image}</h1>
      <h1>{contact.email}</h1>
      <h1>{contact.number}</h1>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default ContactDetail
