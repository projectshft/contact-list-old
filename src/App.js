import React, { Component } from "react";
import ReactDOM from "react-dom";
import NewContact from "./new";
import Home from "./home";
import ContactList from "./contactlist";
import Contact from "./contact";
import ContactDetail from "./ContactDetail";
import ContactListItem from "./contactlistitem";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: []
    };
    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    this.setState({ contacts: this.state.contacts.concat([contact]) });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              exact
              path="/contacts/new"
              render={() => <NewContact addContact={this.addContact} />}
            />
            <Route
              exact
              path="/"
              render={() => <Home contacts={this.state.contacts} />}
            />
            <Route
              path="/contacts/:id"
              render={() => <ContactDetail contacts={this.state.contacts} />}
            />
            <Route
              path="/contacts"
              render={() => <ContactList contacts={this.state.contacts} />}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
