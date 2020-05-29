import { Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ContactList from './contact-list';
import Contact from './contact-single';

class Contacts extends Component {
  render() {
    return (
      <Switch>
        <Route path='/contacts' component={ContactList} />
        <Route path='/contacts/:key' component={Contact} />
      </Switch>
    );
  }
}

export default Contacts;
