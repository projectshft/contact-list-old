import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
