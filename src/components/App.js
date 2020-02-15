import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "./Home.js"
import Contacts from "./Contacts.js"
import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {id: "0", name: "Emergency Services", phone: 911, email: "911@gmail.com", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthenypost.files.wordpress.com%2F2014%2F09%2Ffdny2.jpg%3Fquality%3D90%26strip%3Dall%26w%3D1200&f=1&nofb=1"},
        {id: "1", name: "Paul Storm", phone: 2146421596, email: "paulwwstorm@gmail.com", imageURL: "https://i.ebayimg.com/images/i/400035557721-0-1/s-l1000.jpg"},
        {id: "2", name: "Mom", phone: 1112223333, email: "mama_storm@worldsbestmom.com", imageURL: "https://image.shutterstock.com/image-vector/mom-letters-abstract-heart-ribbon-260nw-583550794.jpg"}
      ]
    }

    this.addContact = this.addContact.bind(this)
    this.editContact = this.editContact.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }

  addContact (contact) {
    contact['id'] = uuid()
    this.setState({ contacts: this.state.contacts.concat(contact)})
  }

  editContact (editedContact) {
    const editedContacts = this.state.contacts.map(contact => {
      if (contact.id !== editedContact.id) {
        return contact
      } else {
        return editedContact
      }
    })

    this.setState({ contacts: editedContacts})

  }

  deleteContact (contactId) {
    if (window.confirm("Are you sure you want to delete?")) {
      const removedContact = this.state.contacts.filter(contact => {
        if (contact.id !== contactId) {
          return contact
        }
      })

      this.setState({ contacts: removedContact})

      return (
        <Redirect to="/contacts" />
      )
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contacts" render={() => (
            <Contacts addContact={this.addContact}
              editContact={this.editContact}
              deleteContact={this.deleteContact}
              contacts={this.state.contacts}
              />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
