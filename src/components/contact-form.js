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
      editMode: contact ? true : false,
      errors: []
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

    //use the above contact to check for errors, returns number of errors
    //do function calls if no errors
    if (!this.determineErrors(contact)) {
      if (!this.state.editMode) {
        this.props.addContact(contact);
      } else {
        this.props.editContact(contact);
      }
      this.props.props.history.push("/contacts");
    }
  }

  determineErrors(contact) {
    //check all required properties and add them to and error list
    function isBlank(str) {
      return !str || /^\s*$/.test(str);
    }

    let newErrors = [];

    if (isBlank(contact.name)) {
      newErrors.push("Name Cannot Be Blank");
    }

    if (isBlank(contact.email)) {
      newErrors.push("Email Cannot Be Blank");
    }

    if (isBlank(contact.phone_number)) {
      newErrors.push("Phone Number Cannot Be Blank");
    }

    //set error list to cause refresh of error list on page
    this.setState({ errors: newErrors });

    //return whether or not there are errors for use in click
    return newErrors.length > 0;
  }

  render() {
    return (
      <div>
        <form>
          <h3> {this.state.editMode ? "Edit Contact" : "Add New Contact"}</h3>

          <div className="form-group">
            Name:{" "}
            <input
              className="form-control"
              placeholder="Name"
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
            />
            <br />
            Email:{" "}
            <input
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
            <br />
            Phone:{" "}
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
        {/* display errors below */}
        {this.state.errors.map((error, index) => (
          <p key={index} className={"errorText"}>
            {error}
          </p>
        ))}
      </div>
    );
  }
}

export default ContactForm;
