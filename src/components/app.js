import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import ContactList from './contact-list';
import React, { Component } from 'react';



class App extends Component {
  constructor() {
    super()
    // Initialize State
    this.state = {
        contacts: [
            {name: 'Chris Whatley',
             email: 'chris.whatley87@gmail.com',
             phoneNumber: 2162689375,
             id: 1 }
        ]
    }
    this.addContact = this.addContact.bind(this);
  }

addContact(contact) {
  this.setState({contacts: this.state.contacts.concat([contact])});
}  

render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => (
            <Home addContact= {this.addContact} contacts={this.state.contacts} />)}
          />
          <Route ContactList />
        </Switch>
      </div>
    )
  }
}

export default App
