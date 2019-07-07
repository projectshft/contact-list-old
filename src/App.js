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
    this.getContactById = this.getContactById.bind(this)

  }
  getContactById (uniqueId) {
    const foundContact = this.state.contacts.find(contact => contact.id === uniqueId)
    return foundContact
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat(contact)});
  }

  componentDidUpdate () {
    console.log(this.state.contacts)
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/contacts" render={(props) => <Contacts {...props} contacts={this.state.contacts}/>}  />
          <Route path="/contacts/new" render={(props) => <NewContact {...props} addContact={this.addContact} contacts={this.state.contacts} />} />
          <Route path="/contacts/:id" render={(props) => <ContactView {...props} getContactById={this.getContactById} /> } />
        </Switch>
      </div>
    )
  }
}

export default App;
