import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './Root';
import RolodexRouter from './RolodexRouter';

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

  addContact(newContact) { 
    this.setState({ contacts: this.state.contacts.concat([newContact]) });
  }

  editContact(updatedContact) {
    debugger;
  }

  removeContact(deletedContact) {debugger;
    this.setState({ contacts: this.state.contacts.filter((contact) => {
      return (contact === deletedContact) ? false : true;
    }) });
  }
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Root}/>
          <Route path='/contacts' render={() => (
            <RolodexRouter contacts={this.state.contacts} addContact={this.addContact} editContact={this.editContact} removeContact={this.removeContact} />
          )} />
        </Switch>
      </div>
    )
  }
}

export default App;