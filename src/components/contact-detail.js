import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props)

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
        <div className="row">
          <h1>{this.state.name}</h1>
          <Link to={'/'}>Back to Contacts List</Link>
        </div>
        <div className="row">
          <h3>Name:</h3>
          <div className="form-group">
            <input className="form-control" onChange={event => this.setState({name: event.target.value})} value={this.state.name}/>
          </div>
        </div>
        <div className="row">
          <h3>Image URL:</h3>
          <div className="form-group">
            <input className="form-control" onChange={event => this.setState({imageUrl: event.target.value})} value={this.state.imageUrl}/>
          </div>
        </div>
        <div className="row">
          <h3>Email:</h3>
          <div className="form-group">
            <input className="form-control" onChange={event => this.setState({email: event.target.value})} value={this.state.email}/>
          </div>
        </div>
        <div className="row">
          <h3>Phone Number:</h3>
          <div className="form-group">
            <input className="form-control" onChange={event => this.setState({phoneNumber: event.target.value})} value={this.state.phoneNumber}/>
          </div>
        </div>
        <div className="row">
          <Link to='/' className="btn btn-secondary" onClick={() => this.props.updateContact(this.state)}>Save Changes</Link>
        </div>
      </div>
    )
  }
}

export default Contact;
