import { render } from 'react-dom';
import React, { BrowserRouter, Switch, Route, Link,  Component } from 'react';
import ContactAPI from './ContactAPI.js';
import Header from './Header.js';
import Home from './Home.js';
import Main from './Main.js';


const AllContacts = () => (
  <div>
    <ul>
      {
        ContactAPI.all().map(p => (
          <li key={p.email}>
            <Link to={`/contacts/${p.email}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default AllContacts;
