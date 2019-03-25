import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    fname: '',
    lname: '',
    phone: '',
    email: '',
    image_url: '',
    id: null
  };

  handleClick = e => {
    e.preventDefault();
    // Store new contact as an object
    const newContact = {
      fname: this.state.fname,
      lname: this.state.lname,
      phone: this.state.phone,
      email: this.state.email,
      image_url: this.state.image_url,
      id: uuid()
    };
    // Unable to utilize HTML 'required' as e.preventDefault doesn't work. This is the most basic of form validation checking only that required fields not be empty.
    const { fname, lname, email } = newContact;

    if (fname !== '' && lname !== '' && email !== '') {
      // Call addContact to add the new contact
      this.props.addContact(newContact);
      // Redirect to the /contacts route via Router props to ensure the new contact is there
      this.props.history.push('/contacts');
    } else {
      alert('Please fill out required fields.');
    }
  };

  render() {
    return (
      <div className="p-3">
        <Link to="/">Back to Contacts</Link>
        <div className="col-md-8 pt-3 m-auto">
          <h4 className="pt-3">Please enter contact information...</h4>
          <form className="new-contact-form pb-3" onSubmit={this.handleClick}>
            <input
              type="text"
              className="form-control form-field-top"
              placeholder="First name (required)"
              autoFocus
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
            />

            <input
              type="text"
              className="form-control form-field"
              placeholder="Last name (required)"
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}
            />

            <input
              type="tel"
              className="form-control form-field"
              placeholder="Phone"
              value={this.state.phone}
              onChange={e => this.setState({ phone: e.target.value })}
            />

            <input
              type="email"
              className="form-control form-field"
              placeholder="Email (required)"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />

            <input
              type="url"
              className="form-control form-field-bot"
              placeholder="Image URL (for best results use a square image)"
              value={this.state.image_url}
              onChange={e => this.setState({ image_url: e.target.value })}
            />

            <button
              type="button"
              className="btn btn-primary mt-2 form-control"
              onClick={this.handleClick}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default AddContact;
