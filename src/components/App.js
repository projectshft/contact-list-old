import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import ContactList from './ContactList'


// global state
  //add function, delete function, and update functions go here
class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {id: 87878787, name: 'jeff goldblum', email: 'jeff@goldblum.com', phone_number: '8006666666'},
        {id: 79797979, name: 'rachel dratch', email: 'dratchy@weird.com', phone_number: '9009119111'}
      ]
    }
  }


  render() {
    return (
      <div>
        <Switch>

          <Route path='/contacts' render={() => (
            <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} />
          )}/>
          <Route exact path='/' render={() => (
            <ContactList contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App
