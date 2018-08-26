import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'


const ContactView = ({props, contacts}) => {
  const contactView = _.find(contacts, { id: parseInt(props.match.params.id, 10) });

  if (!contactView) {
    return <div>Sorry, but that friend does not exist</div>
  }
  return (
    <div>
      <h1>{contactView.name} (#{contactView.phone_number})</h1>
      <h2>Email: {contactView.email}</h2>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default ContactView
