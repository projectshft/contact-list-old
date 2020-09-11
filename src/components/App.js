import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Contacts from './Contacts';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        { id: Math.random*10000, name: "Ben Blocker", email: "G", telephone: "3306456546", imgSrc: ""},
        { id: Math.random * 10000, name: "Ben Blocker", email: "G", telephone: "3306456546", imgSrc: "" },
        { id: Math.random*10000, name: "Ben Blocker", email: "G", telephone: "3306456546", imgSrc: ""},
      ]
    }
    
    this.addContact = this.addContact.bind(this);
  }
  
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/contacts' render={() => (
            <Contacts addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App
