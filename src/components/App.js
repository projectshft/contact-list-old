import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom';
import Home from './Home'
import Contacts from './Contacts'

class App extends Component {
  constructor() {
    super()

    this.state = {
      people: [
        { id: 1, name: "Ben Joyce", imgURL: "www.https:", email: "bmjoyce@ncsu.edu", phone_number: '3364550205' }
      ]
    }

    // this.addContact = this.addContact.bind(this);
  }

  // addContact: (contact) {
  //   this.setState({})
  // }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/contacts' render={() => (
            <Roster addPlayer={this.addPlayer} players={this.state.players} />
          )} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;