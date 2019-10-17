import React, { Component } from "react";

class ContactAddForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone_number: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const generateId = () => Math.round(Math.random() * 100000000);

    const contact = {
      id: generateId(),
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number
    };

    this.props.addContact(contact);
    this.props.props.history.push("/contacts");
  }

  render() {
    return (
      <form>
        <h3>Add a New Contact</h3>

        <div className="form-group">
          <input
            className="form-control"
            placeholder="Name"
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />

          <br />

          <input
            className="form-control"
            placeholder="Email"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />

          <br />

          <input
            className="form-control"
            placeholder="Phone Number"
            value={this.state.phone_number}
            onChange={event =>
              this.setState({ phone_number: event.target.value })
            }
          />
        </div>

        <button
          onClick={this.handleClick}
          type="button"
          className="btn btn-primary add-contact"
        >
          Add
        </button>
      </form>
    );
  }
}

export default ContactAddForm;
