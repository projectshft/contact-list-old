import { Link } from 'react-router-dom';
import React, { Component } from 'react';

// Page where user can edit contact information
class Contact extends Component {
  constructor(props) {
    super(props)

    debugger;
    this.state = {
      number: this.props.contact.number,
      name: this.props.contact.name,
      imageUrl: this.props.contact.imageUrl,
      email: this.props.contact.email,
      phoneNumber: this.props.contact.phoneNumber
    };
  }

  render() {
    return (
      <div>
        <div className="row justify-content-end">
          <Link className="btn btn-secondary" to={'/'}>Back to Contacts List</Link>
        </div>
        <div className="row justify-content-center">
          <h1>{this.state.name === "" ? "New Contact" : this.state.name}</h1>
        </div>
        <hr/>
        <div className="row justify-content-center">
          <h3 className="input">Name:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({name: event.target.value})} value={this.state.name}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Image URL:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({imageUrl: event.target.value})} value={this.state.imageUrl}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Email:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({email: event.target.value})} value={this.state.email}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Phone Number:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({phoneNumber: event.target.value})} value={this.state.phoneNumber}/>
          </div>
        </div>
        <hr/>
        <div className="row justify-content-end">
          <Link className="btn btn-secondary" onClick={() => this.props.updateContact(this.state)} to='/'>Save Changes</Link>
        </div>
      </div>
    )
  }
}

export default Contact;
