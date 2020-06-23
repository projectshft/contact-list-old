import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Contact = (props) => {

  const contact = props.contacts.find(obj => obj.key === Number(props.match.params.key))

  if (!contact) {
    return (
      <p>Contact not found. Please click on a contact from the contact list.</p>
    )
  } else if (contact) {
    return (
      <div>
        <img src={contact.image} alt={contact.name}/>
        <div className='individual'>
          <h1>{contact.name}</h1>
          <h2>Email:</h2>
          <p>{contact.email}</p>
          <h2>Phone Number:</h2>
          <p>{contact.phone}</p>
          <Link to='/contacts'>Back</Link>
        </div>
      </div>
    )
  }
}

Contact.propTypes = {
  contacts: PropTypes.array,
}

export default Contact
