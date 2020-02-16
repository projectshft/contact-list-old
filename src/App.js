import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import uuid from 'react-uuid'
import axios from 'axios';

import Home from "./components/Home";
import Contact from "./components/Contact";
import Edit from "./components/edit";
import Error from "./components/error";
import Navigation from "./components/Navigation";
import AddContact from "./components/AddContact";


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      contacts: [
        { id: uuid(), name: "Ben ", phone: "111-111-1111", email: "", picture: "https://randomuser.me/api/portraits/med/men/81.jpg" },
        { id: uuid(), name: "Sara ", phone: "111-111-1111", email: "", picture: "https://randomuser.me/api/portraits/med/women/11.jpg" },
        { id: uuid(), name: "Sam ", phone: "111-111-1111", email: "", picture: "https://randomuser.me/api/portraits/med/men/22.jpg" },
        { id: uuid(), name: "Alice ", phone: "111-111-1111", email: "", picture: "https://randomuser.me/api/portraits/med/women/66.jpg" }
      ]
    }

    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
    
  }

  addContact(newContact) {
    this.setState({ contacts: this.state.contacts.concat([newContact]) });
  }

  deleteContact(contactId) {
    console.log('deleted clicked ', contactId)
    const contacts = this.state.contacts.filter(c => c.id !== contactId);
    const contactToDelete = window.confirm(`please confirm deletion of this contact`);
    if (!contactToDelete) {
      return
    } else {
      this.setState({ contacts: contacts });
    }
  }

  

  editContact(contactId) {
    console.log('edit clicked')
  }

  render() {
    console.log(this.state.contacts)
    return (
      <div>
        <Navigation />

        <Switch>
          <Route exact path="/" render={(routeProps) => (
            <Home addContact={this.addContact} editContact={this.editContact} contacts={this.state.contacts} deleteContact={this.deleteContact} contactId={routeProps.match.params.id} />
          )} />
          <Route path="/Contact/:id" render={(routeProps) => (console.log(routeProps.match.params.id),
            <Contact history={routeProps.history} contacts={this.state.contacts} contactId={routeProps.match.params.id} />
          )} />
          <Route path="/edit/:id" render={(routeProps) => (console.log(routeProps.match.params.id),
            <Edit history={routeProps.history} contacts={this.state.contacts} editContact={this.editContact} contactId={routeProps.match.params.id} />
          )} />
          <Route path="/AddContact" render={(routeProps) => (
            <AddContact history={routeProps.history} contacts={this.state.contacts} addContact={this.addContact} randomPictureCall={this.randomPictureCall} />
          )} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;

