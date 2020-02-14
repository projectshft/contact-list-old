import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import ContactList from './ContactList';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: []
    }
    
    this.addContact = this.addContact.bind(this)
  
  }

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
