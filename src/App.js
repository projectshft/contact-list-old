import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Contacts from './components/contacts';
import ContactList from './components/contactList'

const generateId = () => Math.round(Math.random() * 100000000);

class App extends React.Component {
  constructor () {
    super()

    this.state = {
    contacts: [
      { id: generateId(), name: "Rachel", image_url: "", email:'', phone:''},
      { id: generateId(), name: "Hannah", image_url: "", email:'', phone:'' },
      { id: generateId(), name: "Katy", image_url: "", email:'', phone:'' }
    ]
  }

    this.addContact = this.addContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  updateContact (contact) {
    const newContacts = this.state.contacts.map((c) => {
      if (contact.id === c.id) {
        c = contact;
      }

      return c;
    });

    this.setState({contacts: newContacts});
  }

  render() {

    return (

      <div>
          <Switch>
          <Route exact path = '/' render={() => (
            <Contacts updateContact={this.updateContact} addContact={this.addContact} contacts={this.state.contacts}/>
          )}/>
            <Route path = '/contacts' render={() => (
              <ContactList contacts={this.state.contacts}/>
            )}/>
        </Switch>
      </div>

    )
  }
}

export default App
