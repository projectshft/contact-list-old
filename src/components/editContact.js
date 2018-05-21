import React, {Component} from 'react';
import {sendEvent, queryState} from '../state';
import {validateUserInput, formatState, removeNaNchar, emailRegex} from '../utilities.js';

// Edit contact component is about 70% identical to add contact.
// Could merge, but rather seperate to prevent future complication (if any).
class EditContact extends Component {
  constructor(props) {
    super(props)

    // Find desired contact.
    let contact = queryState("findContact", parseInt(props.match.params.id, 10))

    // set this state to contact's state
    this.state = contact;
  }

  // If provided image is not available, this function provides an alt img.
  defaultErrorImg = (event) => {
    event.target.src = 'https://blog.sqlauthority.com/i/a/errorstop.png';
  }

  // Confirmation to delete contact.
  deleteContact = () => {
    if (window.confirm('Delete ' + this.state.name + '?')) {
      sendEvent("deleteContact", this.state);
      this.props.history.push('/');
    }
  }

  // Check Utilities.js for the utility functions ex. validateUserInput, formatState, displayError.
  // Sends update to the state manager after user changes is validated.
  updateChanges = () => {
    if (validateUserInput(this.state)) {
      let formattedState = formatState(this.state);
      this.setState({formattedState});

      sendEvent("updateContact", this.state);
      this.props.history.push(`/${this.state.id}`)
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
    if (removeNaNchar(this.state.phoneNumber).length !== 10 && this.state.phoneNumber !== "N/A") {
      this.setState({badNumber: true});
    } else {
      this.setState({badNumber: false});
    }
    if (!emailRegex.test(this.state.email) && this.state.email !== "N/A") {
      this.setState({badEmail: true});
    } else {
      this.setState({badEmail: false});
    }
  }

  // Decided not to use Link, buttons looks better
  backButton = () => {
    // if ID exist, go back to contact view, else main page.
    // (sometimes ID disappears due to refresh)
    if (queryState("findContact", parseInt(this.props.match.params.id, 10))) {
      this.props.history.push(`/${this.state.id}`);
    } else {
      this.props.history.push(`/`);
    }
  }

  render() {
    //----------------------------- if contact is not found ----------------------//
    if (this.state == null) {
      return (<div>
        <h1 className="text-center">
          Contact Not Found
        </h1>
        <div className="row justify-content-center">
          <img src="http://www.img-academy.com/wp-content/uploads/2018/01/Error-404-3.jpg" alt="Not Found"/>
        </div>

        <div className="row justify-content-center">
          {/* Back button to contacts list */}
          <button className="col-2 justify-content-center" onClick={this.backButton}>Back</button>
        </div>
      </div>)
    }

    //----------------------------- if contact is  found -------------------------//
    return (<div>
      {/* Back button to contacts list */}
      <div className="row justify-content-end">
        <button className="col-2 justify-content-center normal-button" onClick={this.backButton}>Back</button>
      </div>
      <br/>
      {/* Contact Image */}
      <div className="row justify-content-center">
        <img className="contact-img" src={this.state.imageUrl} onError={this.defaultErrorImg} alt={this.state.name}/>
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
          value={this.state.phoneNumber} placeholder="1234567890"/>
      </div>
      <br/>
      {/* Email Input */}
      <div className="row">
        <h4 className="user-input-bar col-3">Email:
        </h4>
        <input
          className={this.state.badEmail ? 'form-control col-6 inputError' : "form-control col-6"}
          onChange={event => this.setState({email: event.target.value})}
          value={this.state.email} placeholder="johndoe@example.com"/>
      </div>
      <br/>
      {/* Image URL Input */}
      <div className="row">
        <h4 className="user-input-bar col-3">Image URL:
        </h4>
        <input
          className="form-control col-6" onChange={event => this.setState({imageUrl: event.target.value})}
          value={this.state.imageUrl} placeholder="https://example.com/example.jpg"/>
      </div>
      <br/>
      {/* Submit Button */}
      <div className="row justify-content-end">
        <button className="normal-button col-2 justify-content-center mr-2" onClick={this.updateChanges}>Save Changes</button>
        <button className="normal-button col-2 justify-content-center" onClick={this.deleteContact}>Delete Contact</button>
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

export default EditContact
