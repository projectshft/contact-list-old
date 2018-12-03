import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const ContactView = ({contacts, props }) => {
  const contact = _.find(contacts, { id: parseInt(props.match.params.id, 10)})

  if (!contact) {
    return <div>Sorry, but contact does not exist
       <Link to='/contacts'><button className='btn btn-warning'>Back</button></Link>
    </div>
  }
  return (
    <div className='container'>
      <h1>{contact.name}</h1>
      <div className="card">
        <img className="card-img-top" src={contact.image} id='contact-display-img' alt='Profile'></img>
        <p>{contact.phoneNumber}</p>
        <p>{contact.email}</p>
        <Link to='/contacts'><button className='btn btn-warning'>Back</button></Link>
      </div>
    </div>
  )
}

export default ContactView

