import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import './AddContact.css'

class AddContact extends Component {
  constructor () {
    super()

    // AddContact opens with values/state initialized to empty
    this.state = {
      redirectToContacts: false,
      id: '',
      name: '',
      email: '',
      phone: '',
      image:''
    }
  }

  // New contact logic. Generates a random ID for new contact and triggers the ContactList to render.
  handleClick= () => {

    // Edge case error handling. Checks for empty required inputs and for correct values
    if (this.state.name === ''  ||
      this.state.email === '' ||
      this.state.phone === '') 
      {
        return alert("Name, email, and phone are REQUIRED. Please fill in to continue")
      }
      else if (this.state.phone.length !== 10) {
        return alert("Not a valid phone number - please use a standard 10 digit phone number with no special characters")
      }
      else if (!this.state.email.includes('@')) {
        return alert("Please use a valid email address")
      }

    const generateId = () => Math.round(Math.random() * 100000000);
    const contact = {
      id: generateId(),
      name: this.state.name,
      email: this.state.email,
      phone: parseInt(this.state.phone),
      image: this.state.image,
    }

    //Saves a default placeholder image if no image URL specified
    if(contact.image === '') {
      contact.image = "https://img.pngio.com/silhouette-user-person-silhouette-person-png-silhouette-head-900_980.jpg"
    }

    this.props.addContact(contact);
    this.setState({redirectToContacts: true})
  }

  render() {
    // Triggered on "add contact" button click to redirect to contact list.
    if (this.state.redirectToContacts) {
      return ( <Redirect to="/contacts"/> )
    }

    return (
      // Form logic saves all values to state. Only added into contact list if "add contact" button clicked
      <form className="AddContact">
        <h3>New Contact Info</h3>
        <Link to="/contacts">
          <button type="button" className="btn btn-primary btn-sm">Back to Contacts</button>
        </Link>
        <div className="form-group row">
          <div className="col-md-3">
            <input
            className="form-control"
            placeholder="Full Name"
            value={this.state.name}
            onChange={event => this.setState({name: event.target.value})}
            />
            <input
            className="form-control"
            placeholder="Email Address"
            value={this.state.email}
            onChange={event => this.setState({email: event.target.value})}
            />
            <input
            className="form-control"
            type="number"
            placeholder="Phone(10 digits. I.E. 1234567777)"
            value={this.state.phone}
            onChange={event => this.setState({phone: event.target.value})}
            />
            <input
            className="form-control"
            placeholder="Image URL"
            value={this.state.image}
            onChange={event => this.setState({image: event.target.value})}
            />
          </div>
        </div>
          <button onClick={this.handleClick} type="button" className="btn btn-primary add-contact">Add New Contact</button>
      </form>
      
    )
  }
}

// Checks for addContact function passed down from App
AddContact.propTypes = {
  addContact: PropTypes.func
}


export default AddContact;