import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactsAPI from './ContactsAPI'
import { v4 as uuidv4 } from 'uuid';

const AllContacts = () => (
  <div>
  <h1>Contacts</h1> <Link to={'/new-contact-form'}><button type="button" className="btn btn-primary add-post">Add New Contact</button></Link>
    <ul>
      {ContactsAPI.all().map(c => (
        <li key={c.id}>
          <Link to={`/contact/${c.id}`}>{c.name}</Link>
        </li>
      ))}
    </ul>

  </div>
);

export default AllContacts;
