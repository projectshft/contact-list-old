import { Switch, Route, Link, } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './Home'
import AddContact from './AddContact'
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        { number: '352-207-0354', name: "Paul Stanley", email: "paulnstanley@gmail.com" },
        { number: '919-606-8594', name: "Caitlin Stanley", email: "caitlinmoorman@gmail.com" },
      ]
    };

    this.addContact = this.addContact.bind(this);
  }

  addContact (contact) {
    this.setState({
      contacts: this.state.contacts.concat([contact])
      //add redirect
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            <Home contacts={this.state.contacts}/>
          )}/>
          <Route path='/contacts/new' render={() => (
            <AddContact addContact={this.addContact} contacts={this.state.contacts}/>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
