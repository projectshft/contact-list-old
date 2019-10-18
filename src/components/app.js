import React, { Component } from "react";
import Header from "./header";
import Main from "./main";

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
  }

  addContact(contact) {
    this.setState({ contacts: this.state.contacts.concat([contact]) });
  }

  deleteContact(id) {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  }

  callbackTest() {
    console.log(this.state);
  }

  render = () => (
    <div>
      <Header />
      {/* Passing contacts down to contact-list and contacts, and add contact down to contact-add-form */}
      <Main
        contacts={this.state.contacts}
        addContact={this.addContact}
        deleteContact={this.deleteContact}
      />
    </div>
  );
}

export default App;
