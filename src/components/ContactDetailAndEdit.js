import { Link } from 'react-router-dom';
import React, { Component } from 'react';

//This is the detail page with edit functionality
class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.contact.id,
      firstName: this.props.contact.firstName,
      lastName: this.props.contact.lastName,
      image_url: this.props.contact.image_url,
      email: this.props.contact.email,
      phone_number: this.props.contact.phone_number
    };
  }

  render() {
    return (
      <div>
        {/*button for going back a page*/}
        <div className="row justify-content-center">
          <Link className="btn btn-info" to={'/'}>Back to Contacts List</Link>
        </div>
        {/*The rest of this below is the details for the current selected contact*/}
        <div className="row justify-content-center">
          <h1>Edit Contact</h1>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">First Name:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({firstName: event.target.value})} value={this.state.firstName}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Last Name:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({lastName: event.target.value})} value={this.state.lastName}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Image URL:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({image_url: event.target.value})} value={this.state.image_url}/>
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
            <input className="form-control" onChange={event => this.setState({phone_number: event.target.value})} value={this.state.phone_number}/>
          </div>
        </div>
        <hr/>
        {/*This is the save button below*/}
        <div className="row justify-content-center">
          <Link className="btn btn-primary" onClick={() => this.props.updateContact(this.state)} to='/'>Save Changes</Link>
        </div>
      </div>
    )
  }
}

export default Contact;
