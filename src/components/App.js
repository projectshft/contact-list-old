import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './Root';
import RolodexRouter from './RolodexRouter';

class App extends Component {
  constructor() {
    super();

    //hard coded values for testing
    this.state = {
      contacts: [
        {
          id: 78943201,
          name: 'sir dog',
          image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Stick_figure.png',
          email: 'sirdog@yahoo.com',
          phoneNumber: '555-555-5555'
        },
        {
          id: 12345678,
          name: 'blerb',
          image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Stick_figure.png',
          email: 'blerberino@hotmail.com',
          phoneNumber: '444-444-4444'
        },
        {
          id: 87654321,
          name: 'bobertina',
          image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Stick_figure.png',
          email: 'tina@proton.com',
          phoneNumber: '301-423-9999'
        }
      ],
      showDeleteConfirmation: false
    };

    this.addContact = this.addContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  addContact(newContact) { 
    this.setState({ contacts: this.state.contacts.concat([newContact]) });
  }

  editContact(updatedContact) {
    const newContactsList = this.state.contacts.map((contact) => {
      return (contact.id === updatedContact.id) ? updatedContact : contact;
    });

    this.setState({ contacts: newContactsList });
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