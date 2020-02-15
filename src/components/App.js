import { Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import List from './List'




class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {id:1, name:'Hannah', email:'hannah@google.com', phone:4126451960, imagURL:''},
        {id:2, name:'Hannah', email:'hannah@google.com', phone:4126451960, imagURL:''}
      ],
    
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
          <Route path='/contact' render={() => (
            <List addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>

    )
  }
}

export default App
