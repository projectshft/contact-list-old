import React from "react";

class NewContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      first_name: "",
      last_name: "",
      image_url: "",
      email: "",
      phone_number: "",
    };

    this.handleSubmitContact = this.handleSubmitContact.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  handleSubmitContact(event) {
    const generateId = () => Math.round(Math.random() * 100000000);

    // construct a new obj to pass
    console.log("click");

    const newContact = {
      id: generateId(),
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number,
    };

    console.log("The current props (before adding) are ", this.props);

    this.props.addContact(newContact);

    // we want to prevent the browser from clearing inputs before React handles them
    event.preventDefault();

    // clear the form in case the user wants to input another
    this.setState({
      id: "",
      first_name: "",
      last_name: "",
      image_url: "",
      email: "",
      phone_number: "",
    });
  }

  handleBackButton() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitContact}>
          <label>First Name</label>
          <input
            type="text"
            value={this.state.first_name}
            onChange={(event) =>
              this.setState({ first_name: event.target.value })
            }
          />

          <label>Last Name</label>
          <input
            type="text"
            value={this.state.last_name}
            onChange={(event) =>
              this.setState({ last_name: event.target.value })
            }
          />

          <label>Email Address</label>
          <input
            type="text"
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />

          <label>Phone Number</label>
          <input
            type="text"
            value={this.state.phone_number}
            onChange={(event) =>
              this.setState({ phone_number: event.target.value })
            }
          />

          <label>Image URL</label>
          <input
            type="text"
            value={this.state.image_url}
            onChange={(event) =>
              this.setState({ image_url: event.target.value })
            }
          />

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
