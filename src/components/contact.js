import React, { Component } from 'react';

//create a contact component which is going to be sent and renders into  the contacts-list component This can be stateless function because it's holding the contact info only?


const Contact = ({contact}) => {
  return (
  <div>
    <div> ID: {contact.id}</div>
    <div> Name: {contact.name}</div>
    <div> Phone: {contact.phone}</div>
    <div> Email: {contact.email}</div>
  </div>
  
  )
}

export default Contact;