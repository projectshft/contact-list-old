import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatars from './avatars/avatars';

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

  render() {
    //deconstruct the state and pull out the contacts array
    const { contacts } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="container">
          <ContactList contacts={contacts} />
        </div>
      </div>
    );
  }
}

const randomId = () => Math.floor(Math.random() * 100000000);

const randomNum = num => Math.ceil(Math.random() * num);

export default App;
