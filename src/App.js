import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import Header from './Header'
import Contacts from './Contacts'
import Schedule from './Schedule'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        { name: "Ben Blocker", id: 1},
        { name: "Dave Defender", id: 2 },
        { name: "Sam Sweeper", id: 3 },
        { name: "Matt Midfielder", id: 4 },
        { name: "William Winger", id: 5 },
        { name: "Fillipe Forward", id: 6 }
      ],

      redirect: false
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

