import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import AllContacts from './AllContacts'
import Contact from './Contact'
import Contacts from './Contacts'
import ContactNew from'./ContactNew'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        { name: "Ben Blocker", number: "555-555-5555", email: "abc@gmail.com" },
        { name: "Dave Defender", number: "555-555-5555", email: "abc@gmail.com"},
        { name: "Sam Sweeper", number: "555-555-5555", email: "abc@gmail.com"},
        { name: "Matt Midfielder",number: "555-555-5555", email: "abc@gmail.com"},
        { name: "William Winger", number: "555-555-5555", email: "abc@gmail.com"},
        { name: "Fillipe Forward", number: "555-555-5555", email: "abc@gmail.com" }
      ]
    }

    this.addContact = this.addContact.bind(this);
  }

  addContact (contact) {
    this.setState({Contacts: this.state.contacts.concat([Contacts])});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Contacts' render={() => (
            <Contacts addContacts={this.addContact} contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App
