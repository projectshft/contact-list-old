import { Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Contacts from './Contacts';
import ContactView from './contact_view';
import NewContact from './new_contact'

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: []
    }

    this.addContact = this.addContact.bind(this)

  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.push(contact)})
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/contacts" render={(props) => <Contacts {...props} addContact={this.addContact} contacts={this.state.contacts}/>}  />
          <Route path="/contacts/new" render={(props) => <NewContact {...props} contacts={this.state.contacts} />} />
          <Route path="/contacts/:id" render={(props) => <ContactView {...props} /> } />
        </Switch>
      </div>
    )
  }
}

export default App;
