import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import PropTypes from 'prop-types'

const ContactView = ({contacts, props, deleteContact}) => {
  debugger;
  const Contact = _.find(contacts, { id: parseInt(props.match.params.id, 10)})

  if (!Contact) {
    return <div>Sorry, but contact does not exist</div>
  }
  return (
    <div className='container'>
    <h1>{Contact.name}</h1>
    <div className="card">
    <img className="card-img-top" src={Contact.image} id='contact-display-img'></img>
    <p>{Contact.phoneNumber}</p>
    <p>{Contact.email}</p>
    <Link to='/contacts'><button className='btn btn-warning'>Back</button></Link>
    </div>
    </div>
  )
}

export default ContactView

ContactView.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.number.isRequired,
    phoneNumber: PropTypes.string,
    image: PropTypes.string
  }))
}

