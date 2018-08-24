import { Switch, Route, Redirect} from 'react-router-dom'
import React, { Component } from 'react';
import Home from './Home'
import AddContact from './AddContact'
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        { number: '352-207-0354', name: "Paul Stanley", email: "paulnstanley@gmail.com", id:this.generateID() },
        { number: '919-606-8594', name: "Caitlin Stanley", email: "caitlinmoorman@gmail.com", id:this.generateID() },
      ],
      selectedContact: null
    };

    this.addContact = this.addContact.bind(this);
    this.updateSelectedContact = this.updateSelectedContact.bind(this);
  }

  generateID () {
    return Math.round(Math.random() * 100000000)
  }

  addContact (contact) {
    this.setState({
      contacts: this.state.contacts.concat([contact]),
    })
  }

  updateSelectedContact (selection) {
    this.setState({
      contacts: this.state.contacts,
      selectedContact: selection.id
    });
    console.log('selected id: ' + selection.id)
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/contacts" />
          <Route exact path='/contacts' render={() => (
            <Home contacts={this.state.contacts} updateSelectedContact={this.updateSelectedContact}/>
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
