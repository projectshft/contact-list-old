import { Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: Math.round(Math.random() * 10000),
          name: 'Albert Einstein',
          email: 'emc.deux@aol.com',
          telephone: '123-456-7890',
          imgSrc:
            'https://en.wikipedia.org/wiki/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
        },
        {
          id: Math.round(Math.random() * 10000),
          name: 'Niels Bohr',
          email: 'atomic.og@quantum.com',
          telephone: '987-654-3210',
          imgSrc: 'https://en.wikipedia.org/wiki/File:Niels_Bohr.jpg',
        },
        {
          id: Math.round(Math.random() * 10000),
          name: 'Ryan Gosling',
          email: 'baby.goose@hotmail.com',
          telephone: '919-867-5309',
          imgSrc:
            'https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/31/movies_ryan-gosling-feminist.jpg',
        },
      ],
    };

    // this.addContact = this.addContact.bind(this);
  }

  // addContact() {
  //   console.log('clicked');
  //   addContact(contact) {
  //     this.setState({ contacts: this.state.contacts.concat([contact]) });
  //   }
  // }

  editContact = (id) => {
    console.log(`edit contact id #${id}`);
  };

  deleteContact = (id) => {
    this.setState({
      contacts: [...this.state.contacts.filter((contact) => contact.id !== id)],
    });
  };

  render() {
    return (
      <div className='App container'>
        <div className='row'>
          <div className='col-md-3 offset-md-3'>
            <h1 style={{ display: 'inline-block' }}>Contacts</h1>
          </div>
          <Link className='add-contact-link'  to={`/contacts/new`}>Add Another Contact</Link>
        </div>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Contacts addContact={this.addContact} contacts={this.state.contacts} />
            )}/>
          <Route
            path='/contacts'
            render={() => (
              <Contacts addContact={this.addContact} contacts={this.state.contacts} />
            )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
