import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Contacts from './Contacts';


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
          <Route exact path="/" render={() => (
            <Contacts addContact={this.addContact} contacts={this.state.contacts} />
          )} /> />
          <Route path="/contacts" render={() => (
            <Contacts addContact={this.addContact} contacts={this.state.contacts} />
          )} />
        </Switch>
      </div>
    )
  }
}

export default App
