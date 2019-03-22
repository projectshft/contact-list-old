import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';

import Contacts from './components/Contact';
import AddNewContacts from './components/AddNewContact';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to='/contact'></Redirect>
          )} />
          <Route exact path="/contact" component={Contacts} />
          <Route exact path="/contacts/new" component={AddNewContacts} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
