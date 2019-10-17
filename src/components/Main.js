import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ContactList from './ContactList'
import AddContact from './AddContact'


class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route 
            exact path="/contacts" 
            render={() => (<ContactList contacts={this.props.contacts} />)} 
          />
          <Route path="/contacts/new" component={AddContact} />
        </Switch>
      </main>
    )
  }
}

export default Main;