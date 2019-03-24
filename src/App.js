import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactList from './components/Contact';
import Header from './components/Header';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>The App Component</h1> */}
        <Header psTitle="PS Contact List" />
        <Contact
          name="Charles Mingus"
          email="mingus@gmail.com"
          phone="1-800-fat-bass"
        />
        <Contact
          name="Patty Smith"
          email="PattySmith@gmail.com"
          phone="1-800-hip-poet"
        />
      </div>
    );
  }
}

export default App;
