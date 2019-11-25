import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import NewContact from './new-contact';
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
             contactId: 1 }
        ]
    }
    this.addContact = this.addContact.bind(this);
  }
//concatenates the new contact onto the contacts array in state
  addContact (contact) {
    this.setState({ contacts: this.state.contacts.concat([contact])})
  }
//simply increases contactId by 1
  generateId (contactId) {
    console.log(contactId);
    contactId ++;
    return contactId
  }

render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => (
            <Home  contacts={this.state.contacts}/>)}
          />

          <Route path='/contacts/:id' render={(props) => (
            <Contact props={props} contacts={this.state.contacts}/>
          )}/>

          <Route path='/contact/new' render={(props) => (
            <NewContact props={props} contacts= {this.state.contacts} generateId={this.generateId} addContact= {this.addContact}/>
           )}/>
        </Switch>
      </div>
    )
  }
}

export default App

