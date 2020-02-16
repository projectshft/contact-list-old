import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const ContactDetail = ({contactKey, contacts}) => {
  const contact = _.find(contacts, { key: contactKey });

  if (!contact) {
    return <div>Sorry, but this contact doesn't exist</div>
  }

console.log(contact)

  return (
    <div className="col-md-7 offset-md-4">
      <br></br>
      <img src={contact.image} alt="" width="400" height="auto" className="img-responsive"></img>
      <br></br>
      <br></br>
      <h2>{contact.name}</h2>
      <h4>{contact.phone}</h4>
      <h4>{contact.email}</h4>
      <div>
        <br></br>
        <Link to={`/contacts/edit/${contact.key}`}><button type="button" className="btn btn-info">Edit</button></Link>
        <br></br>
        <Link to='/contacts' className="text-info">Back to Contacts</Link>
        </div>
    </div>
  )
}

ContactDetail.propTypes = {
  contact: PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  contacts: PropTypes.array.isRequired,
  contactKey: PropTypes.number
};


export default ContactDetail
