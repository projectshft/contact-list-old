import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactAdd extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      phone_number: '',
      image_url: ''
    }
  }

  <div>
        <div className="row justify-content-end">
          <Link className="btn btn-secondary" to={'/'}><i className="material-icons small-icon">arrow_back</i>Back to Contacts List</Link>
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
        <hr/>
        <div className="row justify-content-end">
          <Link className="btn btn-primary" onClick={() => this.props.addContact(this.state)} to='/'>Save Changes</Link>
        </div>
      </div>
    )
  }
};

export default ContactAdd;
