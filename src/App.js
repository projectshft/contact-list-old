import React, { Component } from "react";
import ReactDOM from "react-dom";
import New from "./new";
import Home from "./home";
import Contact from "./contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: []
    };
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
              path="/newcontact"
              render={() => <New addContact={this.addContact} />}
            />
            <Route
              exact
              path="/home"
              render={() => <Home contacts={this.state.contacts} />}
            />

            <Route
              path="/contact"
              render={() => <Contact contacts={this.state.contacts} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
