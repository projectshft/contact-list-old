import React from 'react';
import { Link } from 'react-router-dom';
import { get, sendEvent } from '../state';
import PropTypes from 'prop-types';

class ContactView extends React.Component {
  constructor (props) {
    super(props)

    // Using the id from the params, get the contact
    // with that id from from state
    const id = Number(this.props.match.params.id);
    let contact = get(id);

    // if a contact is found, set the state of THIS component
    // equal to the properties and values to the returned
    // contact otherwise set it to the defaults
    if (!contact) {
      contact = this.props;
    }
    this.state = {
      name: contact.name,
      id: contact.id,
      image_url: contact.image_url,
      email: contact.email,
      phone_number: contact.phone_number,
      currentContact: contact
    };
  };

  // Verify that name and email have been entered
  // other inputs will be optional
  inputsValid = (contact) => {
    if (contact.name.length > 0 && contact.email.length > 0) {
      return true;
    }
  };

  // When the user clicks save changes, create a contact object
  // to send to state.js and send only if the inputs are valid
  // according to the inputsValid function.
  saveChanges = (e) => {
    e.preventDefault();
    const contact = {
      id: this.state.currentContact.id,
      name: this.state.name,
      image_url: this.state.image_url || this.props.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };

    if (this.inputsValid(contact)) {
      sendEvent('saveContact', contact);
      // Bring the user back to the contacts list page after updating/adding contact
      document.getElementById("back").click();
    } else {
      alert("Name and email required");
    }
  };

  render () {
    return (
      <div className="row contact-view">
        <Link to='/' id="back" className="back">&lt; Back to Contacts</Link>
        <div>
          <img src={this.state.currentContact.image_url} alt=""/>
          <h2>{this.state.currentContact.name}</h2>
        </div>
        <form action="#">
          <label htmlFor="name">Name:</label>
          <input
            onChange={event => this.setState({name: event.target.value})}
            id="name"
            autoComplete="name"
            className="form-control"
            type="text"
            value={this.state.name}
          />
          <label htmlFor="image-url">Image URL:</label>
          <input
            onChange={event => this.setState({image_url: event.target.value})}
            id="image_url"
            className="form-control"
            type="text"
            value={this.state.image_url}
          />
          <label htmlFor="email">Email:</label>
          <input
            onChange={event => this.setState({email: event.target.value})}
            id="email"
            autoComplete="email"
            className="form-control"
            type="text"
            value={this.state.email}
          />
          <label htmlFor="phone-number">Phone Number:</label>
          <input
            onChange={event => this.setState({phone_number: event.target.value})}
            id="phone_number"
            autoComplete="tel-national"
            className="form-control"
            type="text"
            value={this.state.phone_number}
          />
          <button
            onClick={this.saveChanges}
            className="btn btn-primary">Save Changes
          </button>
        </form>
      </div>
    );
  };
};

// PropType validation
ContactView.propTypes = {
  name: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired
};

// Default props in the event nothing is provided
ContactView.defaultProps = {
  name: "John Doe",
  id: 111111,
  image_url: 'https://support.plymouth.edu/kb_images/Yammer/default.jpeg',
  email: 'john@doe.com',
  phone_number: '555-555-5555'
};

export default ContactView;
