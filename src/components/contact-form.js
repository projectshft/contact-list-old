import React, { Component } from "react";
import _ from "lodash";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    let contact;

    //if we wer passed and edit content property we much be in edit mode, grab the contact from contacts
    if (this.props.hasOwnProperty("editContact")) {
      //url contains id from contact object, use that to grab viewed contact
      contact = _.find(props.contacts, {
        id: parseInt(props.props.match.params.id, 10)
      });
    }

    this.state = {
      name: contact ? contact.name : "",
      email: contact ? contact.email : "",
      phone_number: contact ? contact.phone_number : "",
      id: contact ? contact.id : Math.round(Math.random() * 100000000),
      editMode: contact ? true : false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const contact = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number
    };

    if (!this.state.editMode) {
      this.props.addContact(contact);
    } else {
      this.props.editContact(contact);
    }
    this.props.props.history.push("/contacts");
  }

  render() {
    return (
      <form>
        <h3> {this.state.editMode ? "Edit Contact" : "Add New Contact"}</h3>

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
          {this.state.editMode ? "Save" : "Add"}
        </button>
      </form>
    );
  }
}

export default ContactForm;
