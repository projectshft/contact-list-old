import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Home from "./Home.js"
import Contacts from "./Contacts.js"
import AllContacts from "./AllContacts.js"
import EditContact from "./EditContact.js"
import NewContact from "./NewContact.js"
import Contact from "./Contact.js"
import uuid from 'uuid'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {id: uuid(), name: "Emergency Services", phone: 911, email: "911@gmail.com", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthenypost.files.wordpress.com%2F2014%2F09%2Ffdny2.jpg%3Fquality%3D90%26strip%3Dall%26w%3D1200&f=1&nofb=1"},
        {id: uuid(), name: "Paul Storm", phone: 2146421596, email: "paulwwstorm@gmail.com", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-dHpX_OO-8pc%2FWWaGUhiOXfI%2FAAAAAAAACDE%2FUvey4tS3Hn0oK_rdz0DUljTtxpOIFnMXQCLcBGAs%2Fs1600%2FPaul%252BApostle.jpg&f=1&nofb=1"},
        {id: uuid(), name: "Mom", phone: 2143346227, email: "johanna_storm@gmail.com", imageURL: "https://image.shutterstock.com/image-vector/mom-letters-abstract-heart-ribbon-260nw-583550794.jpg"}
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
    const removedContact = this.state.contacts.filter(contact => {
      if (contact.id != contactId) {
        return contact
      }
    })

    this.setState({ contacts: removedContact})

    return (
      <Redirect to="/contacts" />
    )
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
