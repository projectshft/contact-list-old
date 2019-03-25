import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddContact extends Component {
  state = {
    name: '',
    phone: '',
    email: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if (this.state.name || this.state.phone || this.state.email === '') {
      alert('All fields are required');
    } else {
      this.props.addContact(
        this.state.name,
        this.state.phone,
        this.state.email
      );
      this.props.history.push('/contacts');
    }
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card bg-dark mb-3" style={{ borderRadius: '5px' }}>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name" style={{ color: 'white' }}>
                Name
              </label>
              <input
                type="name"
                name="name"
                className="form-control mb-3"
                placeholder="Enter Name"
                value={name}
                onChange={this.onChange}
              />
              <label htmlFor="phone" style={{ color: 'white' }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Enter Email Address"
                value={email}
                onChange={this.onChange}
              />
              <label htmlFor="email" style={{ color: 'white' }}>
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="form-control mb-3"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={this.onChange}
              />
              <input
                type="submit"
                vaalue="Add Contact"
                className="btn btn-block btn-success"
                style={{ marginTop: '40px' }}
              />
            </div>
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
