import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor () {
    super ()

    this.state = {};

    }

    render () {
      return (
        <div>
        <header className="App-header">
          <h1 className="App-title">Recontact Home</h1>
        </header>
        <p/>
        <Link to='/addcontact'>Add New Contact</Link>
        </div>
      )
    }
  }

export default Home
