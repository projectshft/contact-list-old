import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactList from './components/ContactList';
import FocusContact from './components/FocusContact';
import Header from './components/Header';
import avatars from './avatars/avatars';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  //declare the state for the entire app
  state = {
    contacts: [
      {
        id: randomId(),
        avatar: avatars[randomNum(5) - 1],
        name: 'Elinor Hurt',
        email: 'elinor.hurt@gmail.com',
        phone: '7042130348'
      },
      {
        id: randomId(),
        avatar: avatars[randomNum(5) - 1],
        name: 'Jane Williams',
        email: 'jane.williams@gmail.com',
        phone: '9104897382'
      },
      {
        id: randomId(),
        avatar: avatars[randomNum(5) - 1],
        name: 'Jackie Johnson',
        email: 'jackie.johnson@gmail.com',
        phone: '9198024312'
      }
    ]
  };

  focusContact = id => {
    console.log(id);
  };

  render() {
    //deconstruct the state and pull out the contacts array
    const { contacts } = this.state;

    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            {/* <ContactList contacts={contacts} focusContact={this.focusContact} /> */}
            {/* <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <ContactList
                    {...props}
                    contacts={contacts}
                    focusContact={this.focusContact}
                  />
                </React.Fragment>
              )}
            /> */}
            <FocusContact contact={contacts[0]} />
          </div>
        </div>
      </Router>
    );
  }
}

const randomId = () => Math.floor(Math.random() * 100000000);

const randomNum = num => Math.ceil(Math.random() * num);

export default App;
