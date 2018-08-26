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
        { number: '555-867-5309', name: "Jenny", email: "jenny@wat.com", id:this.generateID() },
        { number: '555-123-4567', name: "Paul Stanley", email: "paulnstanley@gmail.com", id:this.generateID() },
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

//Within the following router, ideally I'd move "/contacts/new" into the nested contacts router, but I built it
//this way prior to adding that nested router and am electing to spend time on other features rather
//than on moving this router.
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/contacts" />
          <Route exact path='/contacts' render={(routerProps) => (
            <Home routerProps={routerProps} contacts={this.state.contacts} updateSelectedContact={this.updateSelectedContact}/>
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
