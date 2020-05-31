import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import _ from 'lodash'
import ReactDOM from 'react-dom';

const Contact = ({contactId, contacts}) => {

  const contact = _.find(contacts, {id: contactId});

  if (!contact) {
    return (
      <div>
      <p>Sorry, but the contact was not found</p>
      <Link to="/contacts">Back</Link>
    </div>);
  }
  return (
    <div>
      <h1>
        {contact.name}
      </h1>
      <h2>Phone: {contact.phone_number}</h2>
      <h2>Email: {contact.email}</h2>
      <div><img src={contact.image_url} /></div>
      <Link to="/contacts">Back</Link>
    </div>
  );
};

export default Contact;
