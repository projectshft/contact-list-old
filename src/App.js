import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import AddContactForm from './components/AddContactForm';

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

    this.handleAddContact = this.handleAddContact.bind(this);
  }

  handleAddContact(contact) {
    this.setState({ contacts: this.state.contacts.concat([contact]) });
  }

  editContact = (id) => {
    console.log(`edit contact id #${id}`);
  };

  deleteContact = (id) => {
    this.setState({
      contacts: [...this.state.contacts.filter((contact) => contact.id !== id)],
    });
  };

  handleAddContact() {
    console.log('clicked');
    this.props.history.push('/addContact');
  }

  render() {
    return (
      <div className='App container'>
        <div className='row'>
          <div className='col-md-3 offset-md-3'>
            <h1 style={{ display: 'inline-block' }}>Contacts</h1>
            <button
              type='button'
              className='add-contact'
              style={{ display: 'inline-block' }}
              onClick={this.handleAddContact}>
              Add Contact
            </button>
          </div>
        </div>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Contacts
                contacts={this.state.contacts}
                editContact={this.editContact}
                deleteContact={this.deleteContact}
              />
            )}
          />
          <Route
            path='/contacts'
            render={() => (
              <Contacts
                contacts={this.state.contacts}
                editContact={this.editContact}
                deleteContact={this.deleteContact}
              />
            )}
          />
          <Route path='/addContact' render={() => <AddContactForm />} />
        </Switch>
      </div>
    );
  }
}

export default App;
