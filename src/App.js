import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact
          avatar="avatar goes here"
          name="Ritchie Fesperman"
          email="ritchie.fes@gmail.com"
          phone="7042024446"
        />
      </div>
    );
  }
}

export default App;
