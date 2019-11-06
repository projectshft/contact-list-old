import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const ContactDetail = ({props, contacts}) => {
  const contact = _.find(contacts, { id: parseInt(props.match.params.id, 10) });
//makes sure the contact exists w/ the ID
  if (!contact) {
    return <div>The contact you choose has been deleted or edited</div>
  }
  return (
    <div>
      <h3>{contact.name}</h3>
      <h3>{contact.imgUrl}</h3>
      <h3>{contact.email}</h3>
      <h3>{contact.number}</h3>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default ContactDetail
