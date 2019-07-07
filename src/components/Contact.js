import { Link } from 'react-router-dom';
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Contact = ({props, contacts}) => {
  const contact = _.find(contacts, { id: parseInt(props.match.params.id, 10) });

  if (!contact) {
    return(
      <div>
        <h2>Sorry, but the contact was not found</h2>
        <Link to='/roladex'>Back</Link>
      </div>
    )
  }
  return (
    <div>
      <Link to="/roladex">Back</Link>
      <div>
        <img src={contact.image_URL}></img>
      </div>
      <h1>{contact.name}</h1>
      <div>
      Phone #: {contact.phoneNumber}
      <br />
      Email: {contact.email}
      </div>
      <br />
      Quote: {contact.quote}
    </div>
  )
}

Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Contact
