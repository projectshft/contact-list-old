import { render } from 'react-dom';
import React, { BrowserRouter, Switch, Route, Link, Component } from 'react';
import "./App.css";
import AllContacts from "./AllContacts.js";
import ContactAPI from "./ContactAPI.js";
import Contact from "./Contact.js";
import Contacts from "./Contacts.js";
import Home from "./Home.js";
import Main from "./Main.js";
import Header from "./Header.js";

const App = () => (
  <div className="App">
    <Home />
    <AllContacts />
    <Contact />
    <ContactAPI />
    <Contacts />
    <Header />
    <Home />
    <Main />
  </div>
);

export default App;
