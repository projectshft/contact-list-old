import { Switch, Route } from 'react-router-dom'
import React, { Component } from "react";
import Header from './Header'
import Contacts from './Contacts'

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
            "https://i.pinimg.com/originals/16/8f/c2/168fc228b82500f528b4dbf6209a4ff8.jpg",
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
    console.log("ADDING CONTACT: ", person)
    this.setState({ contacts: this.state.contacts.concat([person]) });
  }


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/' render={() => (
            <Contacts addPerson={this.addPerson} contacts={this.state.contacts} />
          )}/>
          <Route exact path='/contacts' render={() => (
            <Contacts addPerson={this.addPerson} contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App
