import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "./Home.js"
import Contacts from "./Contacts.js"
import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';

//Create main App component which will hold application state
//As well addContact, editContact and deleteContact functions to update state data
class App extends Component {
  constructor () {
    super()

    //this.state holds all contact data
    //This data is then passed down to any component that needs it
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

  //Add contact allows a new contact to be added to this.state.contacts
  //Is called by NewContact component
  addContact (contact) {
    contact['id'] = uuid()
    this.setState({ contacts: this.state.contacts.concat(contact)})
  }

  //editContact allows the user to update a contact with new info
  //It is called by EditContact component
  editContact (editedContact) {
    //Create a new array editedContacts
    //Loop through contacts and add them to the new array one by one
    const editedContacts = this.state.contacts.map(contact => {
      //Until the contact that has been edited is found
      if (contact.id !== editedContact.id) {
        return contact
      } else {
        //Replace contact with the new edited contact
        return editedContact
      }
    })

    //Replace this.state.contacts with the new array that includes the edited contact
    this.setState({ contacts: editedContacts})

  }

  //Delete contact allows a user to remove a contact from this.state.contacts
  deleteContact (contactId) {
    //Force user to confirm they want to delete the contact
    if (window.confirm("Are you sure you want to delete?")) {
      //Create a new contacts array and filter out deleted contact
      const removedContact = this.state.contacts.filter(contact => {
        if (contact.id !== contactId) {
          return contact
        }
      })

      //Set this.state.contacts to new contacts array with the deleted contact removed
      this.setState({ contacts: removedContact})

      //After deleting, return user to main contact page
      return (
        <Redirect to="/contacts" />
      )
    }
  }

  //The app component controls switching between
  //the url's which contain only the main webpage address
  //and any URL which contain /contacts/
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* the Contacts component handles all traffic which contains /contacts/ */}
          {/* the Contacts component recieves the addContact, editContact and deleteContacts functions */}
          {/* and this.state.contacts */}
          {/* from the App component */}
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
