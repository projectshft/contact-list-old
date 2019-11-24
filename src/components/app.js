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
             id:1}
        ]
    }
    this.addContact = this.addContact.bind(this);
  }

  addContact (contact) {
    this.setState({ contacts: this.state.contacts.concat([contact])})
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

          <Route path='/contacts/new' render={(props) => (
            <NewContact props={props} addContact= {this.addContact}/>
           )}/>
        </Switch>
      </div>
    )
  }
}

export default App

