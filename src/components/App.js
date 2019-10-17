import React, { Component } from 'react';
import ContactForm from './Contact-Form';
import ContactList from './Contact-List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contact List</h1>
        </header>
        <p className="App-intro">
          Modern day rolodex, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
