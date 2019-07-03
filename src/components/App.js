import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './Root';
import Rolodex from './Rolodex';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: []
    };

    this.addContact = this.addContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  addContact(newContact) {}

  editContact(updatedContact) {}

  removeContact(deletedContact) {}
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Root}/>
          <Route exact path='/contacts' render={() => (
            <Rolodex contacts={this.state.contacts} addContact={this.addContact} editContact={this.editContact} />
          )} />
        </Switch>
      </div>
    )
  }
}

export default App;