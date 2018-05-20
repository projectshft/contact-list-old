import React, { Component } from 'react';

const ContactView = (props) => {
  console.log(props)
  const contact = state.get(
    parseInt(props.match.params.id, 10)
  )
  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (
    <div>
      <h4>{contact.name} <button><Link to='/'>Back to Contacts List</Link></button></h4>
      <p>Name: {contact.name}</p>
      <p>Phone Number: {contact.phone_number}</p>
      <p>Email: {contact.email}</p>
      <img className="contact-pic" src={contact.image_url} alt="Contact"/>


    </div>
  )
}

export default ContactView
