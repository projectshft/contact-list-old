import React, { Component } from 'react';
import '../App.css';
import Contacts from './ContactList'
import NewContact from './NewContact'


// Creating a simple div header

class App extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    // This needs to link to NewContact but I don't know how
    window.alert('CLICK');
  }

  addContact (contact) {
    console.log(contact)
  }

  render() {
    return (
      <div className="row">
        <div className="Contacts-main col-md-6 offset-md-3">
          <header className="Contacts-header">
            <h1 className="Contacts-title">Contacts  <button onClick={this.handleClick}>Add Contact</button></h1>
          </header>
            <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
