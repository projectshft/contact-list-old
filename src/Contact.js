import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({ props, contacts }) => {
  debugger;
  const contact = _.find(contacts, { id: parseInt(props.match.params.id, 10) });

  if (!contact) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{contact.name} (#{contact.id})</h1>
      <div>
        <Link to='/contacts'>Back</Link>
      </div>
    </div>
  )
}

export default Contact
