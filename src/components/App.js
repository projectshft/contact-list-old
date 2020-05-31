import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Contacts from './Contacts';
import Contact from './Contact';
import NewContactForm from './NewContactForm'
import ReactDOM from 'react-dom';


const App = () => (
  <div>
    <Contacts />
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Contacts} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/contacts/:id" component={Contact} />
      <Route path='/new-contact-form' component={NewContactForm} />
    </Switch>
  </main>
);


export default App;
