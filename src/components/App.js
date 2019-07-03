import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './Root';
import Rolodex from './Rolodex';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: 789432,
          name: 'sir dog',
          image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Stick_figure.png',
          email: 'sirdog@yahoo.com',
          phoneNumber: '555-555-5555'
        },
        {
          id: 123456,
          name: 'blerb',
          image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Stick_figure.png',
          email: 'blerberino@hotmail.com',
          phoneNumber: '444-444-4444'
        }
      ]
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