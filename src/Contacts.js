import { render } from 'react-dom';
import React, { BrowserRouter, Switch, Route, Link, Component } from 'react';
import AllContacts from './AllContacts.js';
import Contact from './Contact.js';
import Header from './Header.js';
import Home from './Home.js';
import Main from './Main.js';


const Contacts = () => (
  <Switch>
    <Route exact path='/contacts' component={AllContacts}/>
    <Route path='/contacts/:name' component={Contact}/>
  </Switch>
)

export default Contacts;
