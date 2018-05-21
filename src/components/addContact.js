import React, {Component} from 'react';
import {validateUserInput, formatState, removeNaNchar, emailRegex} from '../utilities.js';
import {sendEvent, queryState} from '../state'

class AddContact extends Component {
  constructor() {
    super()

    this.state = {
      name: "Hardcoded Default",
      phoneNumber: "1234567890",
      email: "isBad@example.com",
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/26/21/enhanced/webdr09/original-1014-1422325554-21.jpg"
    }
  }

  // Check Utilities.js for the utility functions ex. validateUserInput, formatState, displayError.
  // Handle submit will first validate user input via ValidateUserInput functions
  // If True, format the state and send addContact Event;
  // else error handling.
  handleSubmit = () => {
    if (validateUserInput(this.state)) {
      let formattedState = formatState(this.state);
      this.setState({formattedState});
      sendEvent("addContact", this.state);
      var id = queryState("lastID", null);
      this.props.history.push(`/${id}`)
    } else {
      this.errorHandler();
    }
  }

  // toggles input border color if there's error (check input classes below)
  errorHandler = () => {
    if (this.state.name === "") {
      this.setState({badName: true});
    } else {
      this.setState({badName: false});
    }
    if (removeNaNchar(this.state.phoneNumber).length !== 10 && this.state.phoneNumber !== "") {
      this.setState({badNumber: true});
    } else {
      this.setState({badNumber: false});
    }
    if (!emailRegex.test(this.state.email) && this.state.email !== "") {
      this.setState({badEmail: true});
    } else {
      this.setState({badEmail: false});
    }
  }

  backButton = () => {
    this.props.history.push(`/`)
  }

  // Each Input section is self-explainatory, input sets this state (AddContact).
  // The <a> tag on submit button gives the button the same look as back button.
  render() {
    return (<div>
{/* Back button to contacts list */}
      <div className="row justify-content-end">
        <button className="col-2 justify-content-center normal-button" onClick={this.backButton}>Back</button>
      </div>
      <br/>
{/* Name Input */}
      <div className="row">
        <h4 className="user-input-bar col-3">Name:
        </h4>
        <input
          className={this.state.badName ? 'form-control col-6 inputError' : "form-control col-6"}
          onChange={event => this.setState({name: event.target.value})}
          value={this.state.name} placeholder="John Doe"/>
      </div>
      <br/>
{/* Phone Number Input */}
      <div className="row">
        <h4 className="user-input-bar col-3">Phone Number:
        </h4>
        <input
          className={this.state.badNumber ? 'form-control col-6 inputError' : "form-control col-6"}
          onChange={event => this.setState({phoneNumber: event.target.value})}
          value={this.state.phoneNumber} placeholder="10 digits ex. 1234567890"/>
      </div>
      <br/>
{/* Email Input */}
      <div className="row">
        <h4 className="user-input-bar col-3">Email:
        </h4>
        <input
          className={this.state.badEmail ? 'form-control col-6 inputError' : "form-control col-6"}
          onChange={event => this.setState({email: event.target.value})}
          value={this.state.email} placeholder="Valid email ex. johndoe@example.com"/>
      </div>
      <br/>
{/* Image URL Input */}
      <div className="row">
        <h4 className="user-input-bar col-3">Image URL:
        </h4>
        <input
          className="form-control col-6"
          onChange={event => this.setState({imageUrl: event.target.value})}
          value={this.state.imageUrl} placeholder="https://example.com/example.jpg"/>
      </div>
      <br/> {/* Submit Button */}
      <div className="row justify-content-end">
        <button className="normal-button col-2 justify-content-center" onClick={this.handleSubmit}>Submit</button>
      </div>
      <br/>
{/* Error Message if any */}
      <div className={this.state.badName ? 'show-error' : "hide-error"}>
        <p>Please enter a <strong>name</strong>.</p>
      </div>
      <div className={this.state.badNumber ? 'show-error' : "hide-error"}>
        <p>Please fill in <strong>valid</strong> phone number. 10 Digits, in any format.</p>
      </div>
      <div className={this.state.badEmail ? 'show-error' : "hide-error"}>
        <p>Please fill in <strong>valid</strong> email.</p>
      </div>
    </div>)
  }
}

export default AddContact;
