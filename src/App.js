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

    this.addContacts = this.addContacts.bind(this)

  }

  addContacts () {
    console.log('click')
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/contacts" component={ContactsList} />
          {/* <Route path="/contacts/:id" component={ContactView} /> */}
        </Switch>
      </div>
    )
  }
}

export default App;
