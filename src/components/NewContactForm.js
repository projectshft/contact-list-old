import React from "react";

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
    let nameError = "";
    let imageURLError = "";
    let emailError = "";
    let phoneNumberError = "";

    let phoneRegEx = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;
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
        {/* using onSubmit for the form so that return key works too */}
        <form onSubmit={this.handleSubmitContact}>
          <label>Name</label>
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
          <div className="error">{this.state.nameError}</div>

          <label>Email Address</label>
          <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
          <div className="error">{this.state.emailError}</div>

          <label>Phone Number</label>
          <input type="text" value={this.state.phoneNumber} name="phoneNumber" onChange={this.handleChange} />
          <div className="error">{this.state.phoneNumberError}</div>

          <label>Image URL</label>
          <input type="text" value={this.state.imageURL} name="imageURL" onChange={this.handleChange} />
          <div className="error">{this.state.imageURLError}</div>

          <button type="submit">Submit</button>

          <button type="button" onClick={this.handleBackButton}>
            Back
          </button>
        </form>
      </div>
    );
  }
}

export default NewContactForm;
