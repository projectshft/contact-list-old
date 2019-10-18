import React, { Component } from "react";
import Header from "./header";
import Main from "./main";
import _ from "lodash";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: 70219577,
          name: "Albert Einstein",
          image_url:
            "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          email: "aeinstein@example.com",
          phone_number: "15555555555"
        }
      ]
    };

    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  addContact(contact) {
    this.setState({ contacts: this.state.contacts.concat([contact]) });
  }

  //find use prev state and filter to return a new array with only non matching ids (should only be 1 less but random is luck)
  deleteContact(id) {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  }

  //find contact and replace it
  editContact(contact) {
    //find old contact
    const oldContact = _.find(this.state.contacts, { id: contact.id });
    //spread to create new contact list
    const updatedContacts = [...this.state.contacts];
    //replace at oldContacts place and save
    updatedContacts[this.state.contacts.indexOf(oldContact)] = contact;
    this.setState({ contacts: updatedContacts });
  }

  render = () => (
    <div>
      <Header />
      {/* Passing contacts down to contact-list and contacts, and add contact down to contact-add-form */}
      <Main
        contacts={this.state.contacts}
        addContact={this.addContact}
        deleteContact={this.deleteContact}
        editContact={this.editContact}
      />
    </div>
  );
}

export default App;
