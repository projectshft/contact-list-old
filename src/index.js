import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';
import Contact from './components/contact-detail';
import ContactNew from './components/contact-new';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: [],
      all: function() { return this.contacts },
      get: function(id) {
        const isContact = c => c.number === id;
        return this.contacts.find(isContact)
      }
    }
  }

  updateContact = (contact) => {
    const oldContact = this.state.get(contact.number);

    let newContacts = this.state.contacts.slice();
    let index = newContacts.indexOf(oldContact);

    newContacts[index] = contact;
    this.setState({ contacts: newContacts });
  }

  addContact = (contact) => {
    contact.number = Math.round(Math.random() * 1000000);

    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  removeContact = (contact) => {
    const c = window.confirm('confirm?');

    if (c) {
      let newContacts = this.state.contacts.slice();
      let index = newContacts.indexOf(contact);

      newContacts.splice( index, 1 );
      this.setState({ contacts: newContacts });
    }
  }

  render () {
    return (
      <div className="container">
        <main>
          <Switch>
            <Route exact path='/' render={(props) => (
              <Home state={this.state} removeContact={this.removeContact}/>
            )}/>
            <Route exact path='/:number' render={(props) => (
              <Contact updateContact={this.updateContact}
                contact={this.state.get(
                  parseInt(props.match.params.number, 10)
                )}
              />
            )}/>
            <Route exact path='/contact/new' render={(props) => (
              <ContactNew addContact={this.addContact} />
            )}/>
          </Switch>
        </main>
      </div>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
