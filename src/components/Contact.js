import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <Link to="/contacts/new"><button>Add Contact</button></Link>
      </div>
    )
  }
}
