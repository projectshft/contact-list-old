import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ContactList from './ContactList';
import IndividualContact from './IndividualContact';
import AddContact from './AddContact'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: [
        { id: 1, name: 'Tom Franks', number: '919-450-2551', email: 'tom@gmail.com', imageUrl: '' },
        { id: 2, name: 'Betty Draper', number: '919-450-2111', email: 'betty@gmail.com', imageUrl: '' },
        { id: 3, name: 'Barry Smith', number: '919-450-2431', email: 'barry@gmail.com', imageUrl: '' }
      ]

    }
    this.addContact = this.addContact.bind(this);

  }

  addContact(contact) {
    const generateId = () => Math.round(Math.random() * 100000000);
    const newContact = {
      id: generateId(),
      name: contact.name,
      email: contact.email,
      imageUrl: contact.imageUrl,
      number: contact.number
    }
    this.setState({ contacts: this.state.contacts.concat([newContact]) });
  }


  render() {
    return (

      <Switch>
        <Route exact path={['/', '/contacts']} render={() => (
          <div className="App">
            <header className="App-header">
            </header>
            <div className="App-intro">
              <div className="row">
                <div className="col-8">
                  <h1 className="App-title">Contact List</h1>
                  <ContactList contacts={this.state.contacts}></ContactList>
                </div>
                <Link to="/contacts/new">
                  <button type="button" className="btn btn-primary">
                    Add New Contact
                 </button>
                </Link>
              </div>
            </div>
          </div>
        )} />
        <Route exact path="/contacts/new" render={() => (<AddContact addContact={this.addContact} />)} />
      </Switch>


    );
  }

};




export default App;


