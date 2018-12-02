import StyledLink from './StyledLink.js'
import React from 'react'
import PropTypes from 'prop-types';

const Contact = ({props, contacts}) => {

  const contactID = parseInt(props.match.params.contactID, 10);
  const currentContact = contacts.find(contact => contact.id === contactID);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center contactCard">
        <div className='col-md-6'>
          <h1>{currentContact.name}</h1>
          <hr/>
          <p>Email: {currentContact.email}</p>
          <p>Phone: {currentContact.phone_number}</p>
        </div>
        <div className='col-md-auto'>
          <img src={currentContact.image_url} alt=""/>
        </div>
      </div>
      <hr/>
      <p><StyledLink to='/contacts/'>back</StyledLink></p>
    </div>
  )
}

Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string.required,
    id: PropTypes.number.required,
    name: PropTypes.string.required,
    phone_number: PropTypes.string.required,
    image_url: PropTypes.string.required
  })),
};


export default Contact
