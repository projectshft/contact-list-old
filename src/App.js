import React, { Component } from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        <div><img className="add" src="https://static.thenounproject.com/png/783652-200.png" alt="add user icon"></img></div>
        <AddContact />
        <Contacts />
        <Contact />
      </div>
    );
  }
}

export default App;