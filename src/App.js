import React, { Component } from 'react';
import ContactsList from './ContactsList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
        <header className="App-header">
          <div className="col-md">
           <h1 className="App-title float-left">Contacts</h1>
           <button type="button" className="btn float-right btn-outline-dark shadow add-contact ml-5 mt-2">Add Contact</button>
          </div>
        </header>
        </div>
        <div className="row mt-3">
          <div className="col-md">
        <p className="App-intro">
          Contacts go here
          <ContactsList contacts={contacts}/>
        </p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
