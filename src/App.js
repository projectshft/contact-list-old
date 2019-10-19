import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import Header from './Header'
import Contacts from './Contacts'
import Schedule from './Schedule'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: localStorage.contacts ? JSON.parse(localStorage.contacts) : [],

      redirect: false
    }
    
    this.addContact = this.addContact.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  setLocalStorage() {
    localStorage.contacts = JSON.stringify(this.state.contacts);
  }
  
  addContact (contact) {
    // concatenate new contact onto contacts array
    this.setState({contacts: this.state.contacts.concat([contact])},this.setLocalStorage);
  }

  deleteContact (contactIdx) {
    let newContacts = [...this.state.contacts]; // make copy of the array
    
    if (contactIdx !== -1) {
      newContacts.splice(contactIdx, 1); // remove contact
      this.setState({contacts: newContacts}, this.setLocalStorage);
    }
  }

  editContact (contactIdx, editedContact) {
    debugger;
    let newContacts = [...this.state.contacts]; // make copy of the array
    
    if (contactIdx !== -1) {
      newContacts.splice(contactIdx, 1, editedContact); // remove contact
      this.setState({contacts: newContacts}, this.setLocalStorage);
    }
  }

  render() {
    return (
      <div>
        
        <Switch>
          <Route exact path='/'>
            <Redirect to='/contacts' />
          </Route>
          <Route path='/contacts' render={() => (
            <Contacts props={this.props} addContact={this.addContact} contacts={this.state.contacts} deleteContact={this.deleteContact} editContact={this.editContact}/>
          )}/>
          // <Route path='/schedule' component={Schedule}/>
        </Switch>
      </div>
    )
  }
}

export default App

