import { render } from 'react-dom';
import React, { BrowserRouter, Switch, Route, Link,  Component } from 'react';
import Contact from './Contact.js';
import ContactAPI from './ContactAPI.js';
import Contacts from './Contacts.js';
import AllContacts from './AllContacts.js';
import Main from './Main.js';
import Home from './Home.js';


const Header = () => (
  <nav>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
    </ul>
  </nav>
)

export default Header;
