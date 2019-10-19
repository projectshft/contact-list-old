import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import ContactList from './ContactList'
import AddContact from './AddContact'
import ContactDetails from './ContactDetails'

import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentContact: null,
      contacts: 
      [
        {id: '123', name: 'Testnasasdasme', email: "testemail.gmail.com", phone: "5556667777", image: ''},
        {id: '456', name: 'Othertsadaest name thing', email: "fake123.gmail.com", phone: "5553334444", image: 'https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image-300x300.jpeg'}
      ]
    }
  }

  setCurrentContact = contactId => {
    this.setState({ currentContact: contactId})
  }

  addContact = contact => {
    this.setState({ contacts: this.state.contacts.concat([contact])})
  }
  
  render() {
    if(this.state.currentContact) {
      return ( <Redirect to= {`/contacts/${this.props.currentContact}`} /> )
    }
    return (
        <Switch>
          <Redirect exact from="/" to="/contacts" />
          <Route exact path="/contacts" 
            render={() => (<ContactList 
              contacts={this.state.contacts} />)} 
          />
          <Route path="/contacts/new" render={() => (<AddContact addContact={this.addContact} />)} />

          <Route path="/contacts/:id" render={() => (<ContactDetails
              currentContact={this.state.currentContact} />)} />
        </Switch>
    )
  }
}

export default App;
