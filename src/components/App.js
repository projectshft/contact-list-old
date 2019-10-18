import React, { Component } from 'react';
import Main from './Main'

class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: 
      [
        {id: '123', name: 'Testnasasdasme', email: "testemail.gmail.com", phone: "5556667777"},
        {id: '456', name: 'Othertsadaest name thing', email: "fake123.gmail.com", phone: "5553334444"}
      ]
    }
  }

  addContact = contact => {
    this.setState({ contacts: this.state.contacts.concat([contact])})
  }
  
  render() {
    return (
      <div className="App">
        <Main 
        contacts={this.state.contacts}
        addContact={this.addContact} 
        />
      </div>
    );
  }
}

export default App;
