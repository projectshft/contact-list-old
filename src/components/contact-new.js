import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Page where user can create a new contact
class ContactNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      imageUrl: "",
      email: "",
      phoneNumber: ""
    }
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
            <input className="form-control" onChange={event => this.setState({name: event.target.value})} value={this.state.name} placeholder="John Doe"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Image URL:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({imageUrl: event.target.value})} value={this.state.imageUrl} placeholder="http://www.example.com/picture.jpg"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Email:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({email: event.target.value})} value={this.state.email} placeholder="jdoe@example.com"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Phone Number:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({phoneNumber: event.target.value})} value={this.state.phoneNumber} placeholder="1-555-555-5555"/>
          </div>
        </div>
        <hr/>
        <div className="row justify-content-end">
          <Link className="btn btn-secondary" onClick={() => this.props.addContact(this.state)} to='/'>Save Changes</Link>
        </div>
      </div>
    )
  }
};

export default ContactNew;
