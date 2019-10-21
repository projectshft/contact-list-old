import React, { Component } from 'react';

class ContactForm extends Component {
  constructor() {
    super()
    
    this.state = {
      name: '',
      id: null,
      email: '',
      phone: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const contact = {
      name: this.state.name,
      id: this.state.id,
      email: this.state.email,
      phone: this.state.phone

    }
    this.props.addContact(contact);
  }

  render() {
    return (
    <form className="ContactForm">
      <h1>Add a New Contact</h1>

      <div className="ContactFormInput">
        <input
          className="form-control"
          placeholder="Contact Name" 
          value={this.state.name} 
          onChange={function (event) {
            this.setState({ name: event.target.value })
          }.bind(this)}
        />
        <br />

        <input
          className="form-control"
          type="text"
          placeholder="Contact Email" 
          value={this.state.email}
          onChange={function (event) {
            this.setState({ email: event.target.value })
          }.bind(this)}
        />

        <br />

        <input
          value={this.state.phone}
          className="form-control"
          placeholder="###-###-####"
          onChange={function (event) {
            this.setState({ phone: event.target.value })
          }.bind(this)}
        />

        <br />

        <input
          className="form-control"
          placeholder="photo here" 
          value={this.state.id} 
          onChange={function (event) {
            this.setState({ id: event.target.value })
          }.bind(this)}
          />

        <br />
  
      </div>

      <button onClick={this.handleClick} type="button"  className="btn btn-success">Add New Contact</button>
    </form>


    );
  }
}

export default ContactForm;