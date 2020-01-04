import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// import PropTypes from "prop-types";

class NewContact extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      image_url: "",
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
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };

    this.props.addContact(contact);
  }

  render() {
    return (
      <div>
        <h1>New Contact info</h1>
        <form name="newContact">
          <input
            name="name"
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
            placeholder="Contact Name"
          />
          <input
            name="image_url"
            value={this.state.image_url}
            onChange={event => this.setState({ image_url: event.target.value })}
            placeholder="Photo Url"
          />
          <input
            name="email"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
            placeholder="Email Address"
          />
          <input
            name="phone_number"
            value={this.state.phone_number}
            onChange={event =>
              this.setState({ phone_number: event.target.value })
            }
            placeholder="Phone Number"
          />
        </form>

        <Link to={`/`}>
          <button onClick={this.handleClick}>Submit New Contact</button>
        </Link>
      </div>
    );
  }
}

// Home.propTypes = {
//   name: React.PropTypes.string,
//   image_url: React.PropTypes.string,
//   email: React.PropTypes.string,
//   phone_number: React.PropTypes.number
// };

export default NewContact;

//grab input fields and change new contact's state, then push that to contacts list's state.
//prop types validate fields
