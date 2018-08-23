import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './Home'
import AddContact from './AddContact'
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: []
    }

    this.addContact = this.addContact.bind(this);
  }

  addContact () {
    alert('clicked add contact');
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/addcontact' render={() => (
            <AddContact addContact={this.addContact} contacts={this.state.contacts}/>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
