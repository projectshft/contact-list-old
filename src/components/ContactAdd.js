import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactAdd extends Component {
  constructor () {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone_number: '',
      image_url: ''
    }
  }

  render() {
    return (
  <div>
        {/*button to go back to homepage*/}
        <div className="row justify-content-center">
          <Link className="btn btn-info" to={'/'}>Back to Contacts List</Link>
        </div>
        <div className="row justify-content-center">
        {/*these below are the inputs that will take the values for a new contact made*/}
          <h1>Add New Contact</h1>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">First Name:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({firstName: event.target.value})} value={this.state.firstName} placeholder="example: Davis"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Last Name:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({lastName: event.target.value})} value={this.state.lastName} placeholder="example: Umana"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Image URL:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({image_url: event.target.value})} value={this.state.image_url} placeholder="Image URL here"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Email:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({email: event.target.value})} value={this.state.email} placeholder="example@gmail.com"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="input">Phone Number:</h3>
          <div className="form-group input">
            <input className="form-control" onChange={event => this.setState({phone_number: event.target.value})} value={this.state.phone_number} placeholder="3364445555"/>
          </div>
        </div>
        <div className="row justify-content-center">
          {/*This is the save button below*/}
          <Link className="btn btn-primary" onClick={() => this.props.addContact(this.state)} to='/'>Save Changes</Link>
        </div>
      </div>
    )
  }
};

export default ContactAdd;
