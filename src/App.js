import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import ContactList from "./components/contact-list";
import Info from "./components/info";

class App extends Component {


  constructor() {
    super()

    this.state = {
      contacts: []

    };
    this.populateContacts = this.populateContacts.bind(this)
    this.addContact = this.addContact.bind(this)
    this.editContact = this.editContact.bind(this)
    this.deleteContact = this.deleteContact.bind(this)

    this.populateContacts()
  }

  populateContacts() {
    console.log("populating")
    fetch("https://randomuser.me/api/?results=15")
      .then(response => response.json())
      .catch(r => console.log(r)).then(r => this._parseContactsAPI(r.results))
  }

  //helper function to parse contact API data and return an array of contact objects 
  _parseContactsAPI(rawResponse) {
  
    let contactArray = rawResponse.map(personObject => ({
      firstName: personObject.name.first,
      lastName: personObject.name.last,
      email: personObject.email,
      phone: personObject.phone,
      imgUrl: personObject.picture.large,
      key: Math.round(Math.random() * 100000000)
    }));

    if (this.state.contacts.length < 1)
      this.setState({ contacts: contactArray })
  }

  addContact(contactInfo) {
    this.setState({ contacts: this.state.contacts.concat([contactInfo]) })
  }

  editContact(newContactInfo) {
    console.log(newContactInfo)
  }

  deleteContact(contactKey) {
    console.log(contactKey)
    this.setState({ contacts: this.state.contacts.filter(contactObject => contactKey !== contactObject.key) })
  }

  //trying to make a copy of the state so the edit function does not change the app state. currently not working still
  render() {
    const { contacts } = Object.assign({}, this.state);
    return <div className="container">
      <div className="jumbotron heading">
        <h1>Contact List</h1>
        <hr className="my-4" />
        <p className="lead">Keep track of all your people</p>
        <Link to='/contacts'>See Contacts</Link>
      </div>
      <Switch>
        <Route exact path="/contacts" render={() => <ContactList contacts={contacts} addContact={this.addContact} deleteContact={this.deleteContact} />} />
        <Route path="/contacts/:id" render={props => <Info {...props} contacts={contacts} editContact={this.editContact} />} />
      </Switch>
    </div>;
  }
}

export default App
