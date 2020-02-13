import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Home from "./Home.js"
import Contacts from "./Contacts.js"
import AllContacts from "./AllContacts.js"
import EditContact from "./EditContacts.js"
import NewContacts from "./NewContacts.js"
import Contact from "./Contact.js"

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {id: 0, name: "Emergency Services", phone: 911, email: "911"}
      ]
    }

    this.addContact = this.addContact.bind(this)
    this.editContact = this.editContact.bind(this)
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/contacts" render={() => (
          <Roster addContact={this.addContact}
            editContact={this.editContact}
            contacts={this.state.contacts}
            />
        )}/>
      </div>
    );
  }
}

export default App;
