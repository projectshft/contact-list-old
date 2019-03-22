import React, { Component } from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
//import ReactDom to use broswer router
//import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';

class App extends Component {

  //use Switch to ensure only one route renders at a time
  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        {/* clicking the addContact button  should take you a new route (/contacts/new) with a form for adding a new contact */}
        <div><img className="addContactIcon" src="https://static.thenounproject.com/png/783652-200.png" alt="add user icon"></img></div>
        <AddContact />
        {/* each contact on the main route should be clickable; when clicked, it leads to a new route /counts/{the id of the contact} */}
        <Contacts />
        {/* <Contact /> */}
      </div>
    );
  }
}

export default App;