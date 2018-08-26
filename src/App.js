import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home.js'
import Contacts from './Contacts.js'
import Contact from './Contact.js'
import newContact from './Add.js'
import Edit from './Edit.js'
import './App.css';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contactList: [
        { "phone": "4011234567", "name": "Ben Blocker", "address": "12 Why Lane", "email": "B@email.com", "id": this.generateId()},
        { "phone": "4011234567", "name": "Dave Defender", "address": "12 What Lane", "email": "D@email.com", "id": this.generateId()},
      ]
    }
      this.addContact = this.addContact.bind(this);
  }

  generateId () {
    return Math.round(Math.random()*100000000)
  }

  addContact (Individual) {
    this.setState({
      contactList: this.state.contactList.concat([Individual])
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Edit' component={Edit}/>
          <Route exact path ='/Add' component={newContact}/>
          <Route path='/Contacts' render={() => (
            <Contacts contactList = {this.state.contactList} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App
