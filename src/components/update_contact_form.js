import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Contact from './contact';
import _ from 'lodash'

const ContactsList = (props) =>




  render(){

    return (
      <form className="update-contact-form">
        <h3>Edit Contact</h3>

        <div className="form-group">
          <input className="form-control" defaultValue={props.name}
            value={this.state.name}
            onChange={event => this.setState({name: event.target.value})}/>

          <br/>

        <input
          className="form-control" placeholder="Image"
          value={this.state.image}
          onChange={event => this.setState({image: event.target.value})}/>

          <br/>

        <input
          className="form-control" placeholder="Email"
          value={this.state.email}
          onChange={event => this.setState({email: event.target.value})}/>

          <br/>

        <input
          className="form-control"
          placeholder="Phone"
          value={this.state.phone}
          onChange={event => this.setState({phone: event.target.value})}/>
        </div>

        <button onClick={this.handleClick} type="button" className="btn btn-primary update-contact">Save</button>
      </form>
    )
  }
}

export default UpdateContactForm;
