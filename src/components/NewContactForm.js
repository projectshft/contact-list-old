import React from "react";
import PropTypes from "prop-types";
import ReactRouterPropTypes from "react-router-prop-types";

// styling
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class NewContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      imageURL: "",
      email: "",
      phoneNumber: "",
      nameError: "",
      imageURLError: "",
      emailError: "",
      phoneNumberError: "",
    };

    this.handleSubmitContact = this.handleSubmitContact.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  validate = () => {
    // should be empty by default so as not to display
    let nameError = "";
    let imageURLError = "";
    let emailError = "";
    let phoneNumberError = "";

    let phoneRegEx = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    let emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.name) {
      nameError = "You must enter a name";
    }

    if (!phoneRegEx.test(this.state.phoneNumber)) {
      phoneNumberError = "Enter a valid phone number";
    }
    if (!emailRegEx.test(this.state.email)) {
      emailError = "Enter a valid email address";
    }

    if (!this.state.imageURLError) {
      imageURLError = "Please enter a URL";
    }

    // if there are any errors, we need to return false to stop submit
    // we'll also set the error to state for printing
    if (emailError || imageURLError || phoneNumberError || nameError) {
      this.setState({ emailError, imageURLError, phoneNumberError, nameError });
      return false;
    }

    return true;
  };

  handleSubmitContact(event) {
    // we want to prevent the browser from clearing inputs before React handles them
    event.preventDefault();

    const generateId = () => Math.round(Math.random() * 100000000);

    const isValid = this.validate();

    if (isValid) {
      // construct a new obj to pass
      const newContact = {
        id: generateId(),
        name: this.state.name,
        imageURL: this.state.imageURL,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
      };

      this.props.addContact(newContact);

      // clear the form in case the user wants to input another
      this.setState({
        id: "",
        name: "",
        imageURL: "",
        email: "",
        phoneNumber: "",
        nameError: "",
        imageURLError: "",
        emailError: "",
        phoneNumberError: "",
      });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleBackButton() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={{ span: 12 }}>
            <h1>Add Contact</h1>
          </Col>
        </Row>

        {/* using onSubmit for the form so that return key works too */}

        <form onSubmit={this.handleSubmitContact} id="add-contact-form">
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
            placeholder="Dwight Schrute"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Dwight Schrute")}
          />
          <div className="error">{this.state.nameError}</div>

          <label>Email Address</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
            placeholder="name@example.com"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "name@example.com")}
          />
          <div className="error">{this.state.emailError}</div>

          <label>Phone Number (10 digit US)</label>
          <input
            type="text"
            value={this.state.phoneNumber}
            name="phoneNumber"
            onChange={this.handleChange}
            placeholder="919-867-5309"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "919-867-5309")}
          />
          <div className="error">{this.state.phoneNumberError}</div>

          <label>Image URL</label>
          <input
            type="text"
            value={this.state.imageURL}
            name="imageURL"
            onChange={this.handleChange}
            placeholder="https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg")}
          />
          <div className="error">{this.state.imageURLError}</div>

          <div className="add-contact-form-buttons">
            <Button variant="primary" type="submit">
              Submit
            </Button>

            <Button variant="secondary" type="button" onClick={this.handleBackButton}>
              Back
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

NewContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default NewContactForm;
