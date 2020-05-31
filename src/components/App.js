import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AllContacts from './AllContacts';
import Contact from './Contact';
import NewContactForm from './NewContactForm'
import ReactDOM from 'react-dom';


const App = () => (
  <div>
    <Main />
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AllContacts} />
      <Route path="/contacts" component={AllContacts} />
      <Route path="/contact/:id" component={Contact} />
      <Route path='/new-contact-form' component={NewContactForm} />
    </Switch>
  </main>
);


export default App;
