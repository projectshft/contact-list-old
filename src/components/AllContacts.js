import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

const AllContacts = ({contacts}) => (
  <div>
  <h1>Contacts</h1> <Link to={'/contacts/new'}><button type="button" className="btn btn-primary add-post">Add New Contact</button></Link>
    <ul>
      { contacts.map(c => (
        <li key={c.id}>
          <Link to={`/contacts/${c.id}`}>{c.name}</Link>
        </li>
      ))}
    </ul>

  </div>
);

export default AllContacts;
