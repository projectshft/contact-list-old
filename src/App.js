import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from "./components/Home";
import Contact from "./components/Contact";
import NewContact from "./components/NewContact";
import Error from "./components/error";
import Navigation from "./components/Navigation";


class App extends Component {

  constructor () {
    super()

    this.state = {
      contacts: [
        { id: 1, name: "Ben ", phone: "111-111-1111", email: "", picture: "" },
        { id: 2, name: "Dave ", phone: "111-111-1111", email: "", picture: "" },
        { id: 3, name: "Sam ", phone: "111-111-1111", email: "", picture: "" },
        { id: 4, name: "Matt ", phone: "111-111-1111", email: "", picture: "" },
        { id: 5, name: "William ", phone: "111-111-1111", email: "", picture: "" },
        { id: 6, name: "Fillipe ", phone: "111-111-1111", email: "", picture: "" }
      ]
    }
    this.addContact = this.addContact.bind(this);
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render() {
    console.log(this.state.contacts)
    return (
      <div>
        <Navigation />
          <Switch>  
            <Route exact path="/"  render={() => (
              <Home contacts={this.state.contacts} />
               )}/> />
            <Route path="/Contact" component={Contact} />
            <Route path="/NewContact" component={NewContact} />
            <Route path="/AddContact" render={() => (
            <Route addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
            <Route component={Error} />
          </Switch>
      </div>
    );
  }
}

export default App;

