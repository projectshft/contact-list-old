import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import ContactList from './ContactList'
import AddContact from './AddContact'
import ContactDetails from './ContactDetails'

// Switch logic for routes - Redirects to contact list on start.
class Main extends Component {
  render() {
    if(this.props.currentContact) {
      return ( <Redirect to= {`/contacts/${this.props.currentContact}`} /> )
    }
    return (
      <main>
        <Switch>
          <Redirect exact from="/" to="/contacts" />
          <Route exact path="/contacts" 
            render={() => (<ContactList 
              contacts={this.props.contacts} />)} 
          />
          <Route path="/contacts/new" render={() => (<AddContact
              addContact={this.props.addContact} />)} />

          <Route path="/contacts/:id" render={() => (<ContactDetails
              currentContact={this.props.currentContact} />)} />
        </Switch>
      </main>
    )
  }
}

export default Main;