import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import AddContact from './addContact';
import Contact from './contact';
import EditContact from './editContact';
import Home from './home';
import Header from './header';
import data from '../data/data'

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts : data
    }
  }

  addContact = (contact) => {
    this.setState({ contacts: this.state.contacts.concat([contact]) })
  }

  render() {
    return (

        <div>
        <Header />
          <Switch>
            <Route exact path='/' render={() => (
              <Home allContacts={this.state.contacts} />
            )}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/editContact' component={EditContact}/>
            <Route path='/addContact' render={() => (
              <AddContact addContact={this.addContact} />
            )}/>
          </Switch>
        </div>
      )
  }
}

export default App
