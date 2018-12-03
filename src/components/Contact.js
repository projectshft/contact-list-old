import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import ContactAPI from './ContactAPI.js';
import AllContacts from './AllContacts.js';
import _ from 'lodash'


const Contact = (props, contacts) => {
  const contact = _.find(contacts, { id: parseInt(props.props.match.params.id, 10)});
  if (!contact) {
  return <div>Sorry, but the player was not found! <Link to='/'> Back</Link></div>
}
else {
return (
  <div>
    <h1>{contact.name} (#{contact.image_url})</h1>
    <h2>Email: {contact.email}</h2>
    <h3>Phone Number: {contact.phone_number}</h3>

    <Link to='/contacts'>Back</Link>
  </div>
)
}
}

export default Contact;
