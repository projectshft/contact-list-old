import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import './AddContact.css'

class AddContact extends Component {
  constructor () {
    super()

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
    const generateId = () => Math.round(Math.random() * 100000000);
    const contact = {
      id: generateId(),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      image: this.state.image,
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
      <form>
        <h3>New Contact Info</h3>
        <Link to="/contacts">Back</Link>
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
            placeholder="Phone"
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

export default AddContact;