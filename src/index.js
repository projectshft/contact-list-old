import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contact from './components/ContactDetailAndEdit';
import Home from './components/Home';
import ContactAdd from './components/ContactAdd';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: [{
        "id": 1,
        "firstName": "Albert",
        "lastName": "Einstein",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
        "email": "aeinstein@example.com",
        "phone_number": "3361115555"
      },
      {
        "id": 2,
        "firstName": "Jake",
        "lastName": "Statefarm",
        "image_url": "http://i0.kym-cdn.com/entries/icons/original/000/017/912/uhh_khakis.png",
        "email": "JakeSF@example.com",
        "phone_number": "9192224444"
      },
      {
        "id": 3,
        "firstName": "Guy",
        "lastName": "Biggs",
        "image_url": "https://411mania.com/wp-content/uploads/2018/01/Mark-Henry-645x370.jpg",
        "email": "HJ101@example.com",
        "phone_number": "9101117777"
      }],
      all: function() { return this.contacts },
      get: function(id) {
        const isContact = c => c.id === id;
        return this.contacts.find(isContact)
      }
    }
  }

// addContact and add id
  addContact = (contact) => {
    contact.id = Math.round(Math.random() * 1000000);

    this.setState({contacts: this.state.contacts.concat([contact])});
  }


  // delete contact clicked on
  removeContact = (contact) => {
    const c = window.confirm('Are you sure you would like to delete ' + '"' + contact.firstName + ' ' + contact.lastName + '"' + '?');

    if (c) {
      let newContacts = this.state.contacts.slice();
      let index = newContacts.indexOf(contact);

      newContacts.splice( index, 1 );
      this.setState({ contacts: newContacts });
    }
  }

  // change the contact info
  changeContact = (contact) => {
    const oldContact = this.state.get(contact.id);

    let newContacts = this.state.contacts.slice();
    let index = newContacts.indexOf(oldContact);

    newContacts[index] = contact;
    this.setState({ contacts: newContacts });
  }

  render () {
    return (
      <div className="container">
        <main>
          <Switch>
            <Route exact path='/' render={(props) => (
              <Home state={this.state} removeContact={this.removeContact}/>
            )}/>
            <Route exact path='/contact/new' render={(props) => (
              <ContactAdd addContact={this.addContact} />
            )}/>
            <Route exact path='/:id' render={(props) => (
              <Contact updateContact={this.updateContact}
                contact={this.state.get(
                  parseInt(props.match.params.id, 10)
                )}
              />
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
