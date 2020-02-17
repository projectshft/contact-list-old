import React from 'react';
import { Switch, Route } from 'react-router-dom';
import uuid from 'react-uuid'

import Home from "./components/Home";
import Contact from "./components/Contact";
import Edit from "./components/edit";
import Error from "./components/error";
import AddContact from "./components/AddContact";

// there are not as many comments here in the code. I have used diagram drawed on the paper. 

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      contacts: [
        { id: uuid(), name: "Ben Clayton", phone: "344-567-7890", email: "bdthomas@att.net", picture: "https://randomuser.me/api/portraits/med/men/81.jpg" },
        { id: uuid(), name: "Sara Robins", phone: "123-732-4563", email: "blixem@live.com", picture: "https://randomuser.me/api/portraits/med/women/11.jpg" },
        { id: uuid(), name: "Sam Peterson", phone: "321-618-4566", email: "cyrus@optonline.net", picture: "https://randomuser.me/api/portraits/med/men/22.jpg" },
        { id: uuid(), name: "Alice Davison", phone: "334-867-8899", email: "parasite@verizon.net", picture: "https://randomuser.me/api/portraits/med/women/66.jpg" }
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
    // find contact with matching ID to delete
    const contacts = this.state.contacts.filter(c => c.id !== contactId);
    const contactToDelete = window.confirm(`please confirm deletion of this contact`);
    if (!contactToDelete) {
      return
    } else {
      this.setState({ contacts: contacts });
    }
  }
  // edit function for contact edit
  editContact(contactId) {
    console.log('edit clicked')
  }

  render() {
    console.log(this.state.contacts)
    return (
      <div>
        {/* <!–– passing props inside in render function     also set error message for nonexisting rout--> */}
        <Switch>
          <Route exact path="/" render={(routeProps) => (
            <Home addContact={this.addContact} editContact={this.editContact} contacts={this.state.contacts} deleteContact={this.deleteContact} contactId={routeProps.match.params.id} />
          )} />
          <Route path="/Contact/:id" render={(routeProps) => (
            <Contact history={routeProps.history} contacts={this.state.contacts} contactId={routeProps.match.params.id} />
          )} />
          <Route path="/edit/:id" render={(routeProps) => (
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

