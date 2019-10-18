import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import Header from './Header'
import Contacts from './Contacts'
import Schedule from './Schedule'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: JSON.parse(localStorage.contacts) || [],

      redirect: false
    }
    
    this.addContact = this.addContact.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    
  }

  setLocalStorage() {
    localStorage.contacts = JSON.stringify(this.state.contacts);
  }
  
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])}, this.setLocalStorage);
  }


  render() {
    return (
      <div>
        
        <Switch>
          <Route exact path='/'>
            <Redirect to='/contacts' />
          </Route>
          <Route path='/contacts' render={() => (
            <Contacts props={this.props} addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
          // <Route path='/schedule' component={Schedule}/>
        </Switch>
      </div>
    )
  }
}

export default App

