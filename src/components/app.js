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

  editContact = (newInformation) => {
    console.log(newInformation)
    console.log(this.state.contacts)
    let person = this.state.contacts.find(contact => contact.Id == newInformation.Id)
    let index  = this.state.contacts.indexOf(person)
    // debugger;
    return this.state.contacts[index] = newInformation
  }

  addContact = (contact) => {
    contact.Id = Math.round(Math.random() * 100000000);
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
            <Route path='/contact/:id' render={(props) => (
                <Contact contacts={this.state.contacts} props={props} />
            )}/>
            <Route path='/editContact/:id' render={(props) =>
              <EditContact editContact={this.editContact} {...props} contacts={this.state.contacts}/>
            }/>
            <Route path='/addContact' render={(props) => (
              <AddContact addContact={this.addContact} {...props}/>
            )}/>
          </Switch>
        </div>
      )
  }
}

export default App
