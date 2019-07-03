import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import ContactList from './ContactList'
import AddContact from './AddContact'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: []
    }
    
    this.addContact = this.addContact.bind(this);
  }
  
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
    console.log(this.state.contacts);
  }

  editContact(contact){
    this.setState({contacts: this.state.contacts.map((c) => c.id === contact.id ? Object.assign({},c,contact) : c)});
    console.log(this.state.contacts);
  }
  

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contacts' render={() => (
            <ContactList editContact={this.editContact} contacts={this.state.contacts} />
          )}/>
          <Route path='/new' component={AddContact}/>
        </Switch>
      </div>
    )
  }
}

export default App
