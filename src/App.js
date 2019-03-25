import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Don't need to import Contact because it will be brought in with ContactList
// import Contact from './components/Contact';

import ContactList from './components/ContactList';
import Header from './components/Header';
import AddContactForm from './components/AddContactForm';
// import EditContact from './components/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="PS Contact List" />
        <div className="container">
          <AddContactForm />
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
