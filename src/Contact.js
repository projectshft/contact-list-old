import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import ContactAPI from './ContactAPI.js';


const Contact = (props) => {
  const contact = ContactAPI.get(
      parseInt(props.match.params.name, 10)
  )
  if (!contact) {
  return <div>Sorry, but the player was not found</div>
}
return (
  <div>
    <h1>{contact.name} (#{contact.image_url})</h1>
    <h2>Email: {contact.email}</h2>
    <h3>Phone Number: {contact.phone_number}</h3>

    <Link to='/contacts'>Back</Link>
  </div>
)
}

export default Contact;
