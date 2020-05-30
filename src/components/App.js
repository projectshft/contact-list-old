import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact'

//import './App.css';

class App extends React.Component {
  constructor() {
    super()
    //state to hold all of the App's contacts
    this.state = {
      contacts: [
        { id: 1,
          name: "Made up", 
          phoneNumber: "812-456-6789", 
          email: "madeup@gmail.com" 
        },
        { id: 2,
          name: "Made up2", 
          phoneNumber: "812-456-6789", 
          email: "madeup@gmail.com" 
        },
        { id: 3,
          name: "Made up3", 
          phoneNumber: "812-456-6789", 
          email: "madeup@gmail.com" 
        },
      ]
    }
    
    this.addContact = this.addContact.bind(this);
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])})
  }

  
  render() {
    return (
      <div>
        {/* Routing exact path of the list of contacts to be the home page
        and the /contacts route */}
        <Switch>
          <Route exact path='/' render={() => (
            <Contact contacts={this.state.contacts} />
          )}/>
          <Route path='/contacts' render={() => (
            // passing addContact function and this.state to the Contact component
            <Contact addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
