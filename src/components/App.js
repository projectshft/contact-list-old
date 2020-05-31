import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AllContacts from './AllContacts';
import Contact from './Contact';
import NewContactForm from './NewContactForm'
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {
          id: 70219574,
          name: "Albert Einstein I",
          image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Einstein_tongue.jpg/220px-Einstein_tongue.jpg",
          email: "aeinstein1@example.com",
          phone_number: "15555555555"
        }
      ]
    }

    this.addContact = this.addContact.bind(this);
  }

    addContact (contact) {
          this.setState({contacts: this.state.contacts.concat([contact])});
    }
    // const isContact = contact => contact.id === id;
    // return this.contacts.find(isContact);


    render() {
      return (
      <div>
        <Switch>
          <Route exact path="/" component={AllContacts} />
          <Route path="/contacts" render={() => (
            <Roster addContact={this.addContact} players={this.state.contacts} />
          )} />
          <Route path='/new-contact-form' component={NewContactForm} />
        </Switch>
      </div>
    )
  }
}

export default App
