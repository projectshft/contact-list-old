import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import ContactList from './ContactList';
import './App.css'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: []
    }
    
    this.addContact = this.addContact.bind(this)
  
  }
  
  // this.state.contacts.concat([contact])
  addContact (contact){
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contacts' render={() => (
            <ContactList addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
