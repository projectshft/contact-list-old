import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import uuid from 'react-uuid'

import Home from "./components/Home";
import Contact from "./components/Contact";
import NewContact from "./components/NewContact";
import Error from "./components/error";
import Navigation from "./components/Navigation";
import AddContact from "./components/AddContact";


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      contacts: [
        { id: uuid(), name: "Ben ", phone: "111-111-1111", email: "", picture: "" },
        { id: uuid(), name: "Dave ", phone: "111-111-1111", email: "", picture: "" },
        { id: uuid(), name: "Sam ", phone: "111-111-1111", email: "", picture: "" },
        { id: uuid(), name: "Matt ", phone: "111-111-1111", email: "", picture: "" },
        { id: uuid(), name: "William ", phone: "111-111-1111", email: "", picture: "" },
        { id: uuid(), name: "Fillipe ", phone: "111-111-1111", email: "", picture: "" }
      ]
    }

    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addContact(newContact) {
    this.setState({ contacts: this.state.contacts.concat([newContact]) });
  }

  deleteContact(contactId) {
    console.log( 'deleted clicked ', contactId)
    const contacts = this.state.contacts.filter(c => c.id !== contactId);
    const contactToDelete = window.confirm(`please confirm deletion of this contact`);
    if (!contactToDelete) {
      return
    } else {    
      this.setState({ contacts: contacts});
    }
  }

  render() {
    console.log(this.state.contacts)
    return (
      <div>
        <Navigation />

        <Switch>
          <Route exact path="/" render={(routeProps)  =>  ( console.log(this.state.contacts.id),
            <Home addContact={this.addContact} contacts={this.state.contacts} deleteContact={this.deleteContact} contactId={routeProps.match.params.id} />
          )} />
          <Route path="/Contact/:id" render={(routeProps) => ( console.log(routeProps.match.params.id),
            <Contact history={routeProps.history} contacts={this.state.contacts}  contactId={routeProps.match.params.id} />
          )} />
          <Route path="/NewContact" component={NewContact} />
          <Route path="/AddContact" render={(routeProps) => ( 
            <AddContact history={routeProps.history} contacts={this.state.contacts} addContact={this.addContact} />
          )} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;

