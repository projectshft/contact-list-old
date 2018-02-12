import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './header'

class EditContact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contact: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A contact was added: ' + this.state.contact);
    event.preventDefault();
  }

  render() {
    return (
      <div className="edit-contact">
        <Header />
        <h1>Add Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" className="first-name" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" className="last-name" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" className="email" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" className="phone-number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Image URL:
            <input type="text" className="image-url" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default EditContact
