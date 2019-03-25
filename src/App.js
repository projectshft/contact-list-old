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
        phone: '7042130348'
      },
      {
        id: 2,
        avatar: avatars[randomNum(5) - 1],
        name: 'Jane Williams',
        email: 'jane.williams@gmail.com',
        phone: '9104897382'
      },
      {
        id: 3,
        avatar: avatars[randomNum(5) - 1],
        name: 'Jackie Johnson',
        email: 'jackie.johnson@gmail.com',
        phone: '9198024312'
      }
    ]
  };

  focusContact = id => {
    //could never make the routing to the focusContact work... Would use this to delete and edit rather easily, but... never got there due to not figuring out the routing to focusContact
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
                  <FocusContact {...props} contact={contacts[0]} />
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
