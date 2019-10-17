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
  }

  addContact(contact) {
    this.setState({ posts: this.state.contacts.concat([contact]) });
  }

  render = () => (
    <div>
      <Header />
      <Main contacts={this.state.contacts} />
    </div>
  );
}

export default App;
