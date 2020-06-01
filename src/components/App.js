import React, { Component } from 'react';
import '../App.css';
import Contacts from './ContactList'


// Creating a simple div header

class App extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="Contacts-main col-md-6 offset-md-3">
          <header className="Contacts-header">
            <h1 className="Contacts-title">Contact List</h1>
            <h2></h2>
          </header>
          <Contacts />
          </div>
          </div>
    );
  }
}

export default App;
