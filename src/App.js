import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatars from './avatars/avatars';

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        avatar: avatars[0],
        name: 'Elinor Hurt',
        email: 'elinor.hurt@gmail.com',
        phone: '7042130348'
      },
      {
        id: 2,
        avatar: avatars[1],
        name: 'Jane Williams',
        email: 'jane.williams@gmail.com',
        phone: '9104897382'
      },
      {
        id: 3,
        avatar: avatars[2],
        name: 'Jackie Johnson',
        email: 'jackie.johnson@gmail.com',
        phone: '9198024312'
      }
    ]
  };

  render() {
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

export default App;
