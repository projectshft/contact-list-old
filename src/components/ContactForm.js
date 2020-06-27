import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ContactForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      phone: '',
      email: '',
      image_url: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  // addPerson(person) {
  //   this.setState({ contacts: this.state.contacts.concat([person]) });
  // }

  handleClick () {
    const person = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      image_url: this.state.image_url
    }

    this.props.addPerson(person);
    // this.props.history.push('/')
  }



// Creating a form for input for a new contact.

render() {
  return (
    
    <form>
      <h3>Add a New Contact</h3>

      <div className="form-group">
        <input
          className="form-control"
          placeholder="Name"
          value={this.state.name}
          onChange={event => this.setState({name: event.target.value})}
           />

        <br/>
        <input
          className="form-control"
          placeholder="Phone Number"
          value={this.state.phone}
          onChange={event => this.setState({phone: event.target.value})}
           />

        <br/>
        <input
          className="form-control"
          placeholder="Email"
          value={this.state.email}
          onChange={event => this.setState({email: event.target.value})}
           />

        <br/>
        <input
          className="form-control"
          placeholder="Photo"
          value={this.state.image_url}
          onChange={event => this.setState({image_url: event.target.value})}
           />
          <br/>
          <button onClick={this.handleClick} type="button" className="btn btn-primary add-person">Submit</button>

        <br/>
        <br/>
        <br/>
        <Link to="/contacts"><button type="button" className="btn btn-primary">Previous Page</button></Link>
      </div>

    </form>
    
  );

}

}


export default ContactForm;
