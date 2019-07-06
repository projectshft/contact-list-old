import { Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ContactsList from './contacts_list';
import ContactView from './contact_view';

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: []
    }

    this.addContact = this.addContact.bind(this)

  }

  addContact () {
    console.log('click me')
  }

  render () {
    return (
      <div>
        <Switch>
    <Route exact path="/contacts" render={(props) => <ContactsList {...props} addContact={this.addContact} />}  />
          {/* <Route path="/contacts/:id" component={ContactView} /> */}
        </Switch>
      </div>
    )
  }
}

export default App;
