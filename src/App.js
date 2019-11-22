import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ContactList from './ContactList';
import IndividualContact from './IndividualContact';
import AddContact from './AddContact'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//Function that holds state and takes information from other components 
class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: [
        { id: 1, name: 'Jerry Seinfeld', number: '919-450-2551', email: 'jerry@gmail.com', imageUrl: 'https://media1.giphy.com/media/e2QYPpUe8WmpG/giphy.gif' },
        { id: 2, name: 'Cosmo Kramer', number: '919-450-2111', email: 'theK-man@gmail.com', imageUrl: 'https://media.giphy.com/media/4WBuU8k2fwaSk/giphy.gif' },
        { id: 3, name: 'Elaine Benes', number: '919-450-2431', email: 'elaine@gmail.com', imageUrl: 'https://melmagazine.com/wp-content/uploads/2018/08/1Xx_bauNjZ_fhN4Jk2JwoKg.gif' },
        { id: 4, name: 'George Costanza', number: '919-450-2431', email: 'george@gmail.com', imageUrl: 'https://i.gifer.com/4KNI.gif' }
      ]

    }

    this.addContact = this.addContact.bind(this);

  }

  addContact(contact) {
    const generateId = () => Math.round(Math.random() * 100000000);

    if (contact.name.length <= 10 || contact.name == '' || contact.name == null) {
      return alert('Please enter a name')
    }
    if (contact.email <= 10 || contact.name == '' && !contact.email.includes('@')) {
      return alert('Please enter a valid email address')
    }
    if (contact.number < 10 || contact.name == '') {
      return alert('Please enter a valid phone number')
    }

    alert(contact.name)
    const newContact = {
      id: generateId(),
      name: contact.name,
      email: contact.email,
      imageUrl: contact.imageUrl,
      number: contact.number
    }
    this.setState({ contacts: this.state.contacts.concat([newContact]) });
    console.log(newContact)
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
                  <button type="button" className="addButton btn btn-primary">
                    Add New Contact
                 </button>
                </Link>
              </div>
            </div>
          </div>
        )} />
        <Route exact path="/contacts/new" render={() => (<AddContact addContact={this.addContact} />)} />
        <Route exact path="/contacts/:id" render={(props) => (
          <IndividualContact contacts={this.state.contacts} props={props} />)} />
      </Switch>


    );
  }

};




export default App;


