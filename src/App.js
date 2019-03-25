import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactList from './components/ContactList';
import FocusContact from './components/FocusContact';
import Header from './components/Header';
import AddContact from './components/AddContact';
import avatars from './avatars/avatars';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  //declare the state for the entire app
  state = {
    contacts: [
      {
        id: 1,
        avatar: avatars[randomNum(5) - 1],
        name: 'Elinor Hurt',
        email: 'elinor.hurt@gmail.com',
        phone: '7042130348',
        isFocused: false
      },
      {
        id: 2,
        avatar: avatars[randomNum(5) - 1],
        name: 'Jane Williams',
        email: 'jane.williams@gmail.com',
        phone: '9104897382',
        isFocused: false
      },
      {
        id: 3,
        avatar: avatars[randomNum(5) - 1],
        name: 'Jackie Johnson',
        email: 'jackie.johnson@gmail.com',
        phone: '9198024312',
        isFocused: false
      }
    ],
    focusId: 0
  };

  focusContact = id => {
    for (let i = 0; i < this.state.contacts.length; i++) {
      if (this.state.contacts[i].id === id) {
        this.setState({ focusId: i });
      }
    }
  };

  addContact = (name, email, phone) => {
    const newContact = {
      id: randomId(),
      avatar: avatars[randomNum(5) - 1],
      name,
      email,
      phone,
      isFocused: false
    };
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  render() {
    //deconstruct the state and pull out the contacts array
    const { contacts } = this.state;
    const { focusId } = this.state;

    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route
                exact
                path={['/', '/contacts']}
                render={props => (
                  <ContactList
                    {...props}
                    contacts={contacts}
                    focusContact={this.focusContact}
                  />
                )}
              />
              <Route
                path="/contact/:id"
                render={props => (
                  <FocusContact {...props} contact={contacts[focusId]} />
                )}
              />
              <Route
                path="/add-contact"
                render={props => (
                  <AddContact {...props} addContact={this.addContact} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const randomId = () => Math.floor(Math.random() * 100000000);

const randomNum = num => Math.ceil(Math.random() * num);

export default App;
