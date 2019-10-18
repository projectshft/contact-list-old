import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import ContactList from './ContactList'
import AddContact from './AddContact'

// Switch logic for routes - Redirects to contact list on start.
class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Redirect exact from="/" to="/contacts" />
          <Route 
            path="/contacts" 
            render={() => (<ContactList contacts={this.props.contacts} />)} 
          />
          <Route path="/contacts/new" component={AddContact} />
        </Switch>
      </main>
    )
  }
}

export default Main;