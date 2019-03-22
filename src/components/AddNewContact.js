import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AddNewContact extends Component {
  render() {
    return (
      <div>
        <Link to="/contact">Go Back</Link>
        <h1>Adding new contact</h1>
      </div>
    )
  }
}
