import React, { Component } from "react";
import ContactForm from "./Contact-form";
import ContactList from "./Contact-list";
import Person from "./Person";
import { Switch, Route } from 'react-router-dom'

const generateId = () => Math.round(Math.random() * 100000000);

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: generateId(),
          name: "Albert Einstein",
          image_url:
            "https://i.pinimg.com/236x/95/8f/7a/958f7acae61910da05f327a38eb63530--innovation-design-imagination.jpg",
          email: "aeinstein@example.com",
          phone: "15555555555",
        },
        {
          id: generateId(),
          name: "Homer Simpson",
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
          email: "homer@compuglobalhypermeganet.com",
          phone: "9395550113",
        },
        {
          id: generateId(),
          name: "Ghostbusters Inc.",
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/e/ee/Ghostbusters_logo.svg",
          email: "pvenkmann@ghostbusters.com",
          phone: "1234567890",
        },
      ],
    };
    this.addPerson = this.addPerson.bind(this);
  }

  addPerson(person) {
    this.setState({ contacts: this.state.contacts.concat([person]) });
  }

  render() {
    console.log(this.state.contacts[2]);
    console.log(this.state.contacts[2].name);
    return (
      <div className="column">
        <div className="Contact_main  ">
          <div className="page-header">
            <h1>Contacts</h1>
          </div>
          {/* <Person person = { { name: "George Costanza" } } /> */}
          {/* <Person person={this.state.contacts[2]} /> */}
          <ContactList contacts={this.state.contacts} />
          <ContactForm addPerson={this.addPerson}/>
        </div>
      </div>
    );
  }
}

export default App;
