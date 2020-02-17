import React, { Component } from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types';

//The EditContact Component takes in an existing contact
//Allows the user to edit the information and resave the edited contact
class EditContact extends Component {
  constructor(props) {
    super(props)

    this.currentContact = {}

    //Find the contact to be edit in the array of all contacts
    this.props.contacts.forEach(contact => {
      if (contact.id === this.props.contactId) {
        this.currentContact = _.clone(contact)
      }
    })

    //Use the existing contact information to create the
    //Data structure to be changed upon user input
    this.state = {
      id: this.props.contactId,
      name: this.currentContact.name,
      phone: this.currentContact.phone,
      email: this.currentContact.email,
      imageURL: this.currentContact.imageURL
    }

    this.onClick = this.onClick.bind(this)
  }


  //When the user clicks edit
  //Gather the contact info and add to the contacts list
  onClick () {
    const editedContact = {
      id: this.state.id,
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      imageURL: this.state.imageURL
    }

    //The function valid email is use to ensure the user has entered
    //A valid email for the edited contact
    const validEmail = (email) => {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    //Conduct a series of test to make sure all the edited information is valid
    //And alerting the user if any of the information is invalid

    //Start by making sure the name field is not empty
    //And is not longer than 30 characters
    if (editedContact.name.length == 0) {
      alert("The name field cannot be empty!")
      return true
    } else if (editedContact.name.length > 30) {
      alert("The name field cannot be longer than 30 characters!")
      return true
    //Check to see if the user entered a ten digit phone number
    } else if (editedContact.phone.length > 11 || editedContact.phone.length < 10) {
      alert("Please enter a 10 digit phone number")
      return true
    //Call validEmail to ensure the user entered a valid email address
    } else if (!validEmail(editedContact.email)) {
      alert ("Please enter a valid email!")
      return true
    //Make sure the user did not sumbit an empty image url
    } else if (editedContact.imageURL.length == 0) {
      alert("Please enter a image url")
      return true
    }

    //If all info for the edited contact is valid
    //Save it to the contacts list
    //And send the user back the page displaying all contacts
    this.props.editContact(editedContact)
    this.props.history.push('/contacts')
  }


//Display a submission form
//Pre-fill the submission form with the existing contact information
//And allow the user to edit as they see fit
render() {
  return (
    <div>
      <div className="row">
        <div className="col col-sm-3"></div>
        <div className="col col-sm-8 col-md-6">
          {/* Create submission form filled with the contacts existing */}
          {/* name, phone number, email and image url */}
          <h2>Edit Contact</h2>
          <form className="form-group">
            {/* An input field for the contact's name */}
            {/* Pre-filled with the contact's existing name */}
            <input className="form-control" type="text" defaultValue={this.currentContact.name} onChange={event =>
              this.setState({ name: event.target.value })}></input>

            <br></br>

            {/* An input field for the contact's phone number */}
            {/* Pre-filled with the contact's existing number */}
            <input className="form-control" type="text" defaultValue={this.currentContact.phone} maxLength="10" onChange={event =>
              this.setState({ phone: event.target.value })}></input>

            <br></br>

            {/* An input field for the contact's email address */}
            {/* Pre-filled with the contact's email address */}
            <input className="form-control" type="text" defaultValue={this.currentContact.email} maxLength="30" onChange={event =>
              this.setState({ email: event.target.value })}></input>

            <br></br>

            {/* An input field for the contact's image URL */}
            {/* Pre-filled with the contact's image URL */}
            <input className="form-control"type="text" defaultValue={this.currentContact.imageURL}  onChange={event =>
              this.setState({ imageURL: event.target.value })}></input>

            <br></br>

            {/* Create a button that allows the user to save their edits */}
            <button className="btn btn-primary" onClick={this.onClick}>Save</button>
        </form>
        </div>
        <div className="col col-md-3"></div>
      </div>
    </div>
    );
  }
}

//Set prototypes for EditContact
EditContact.propTypes = {
  contactId: PropTypes.string,
  editContact: PropTypes.func
}

export default EditContact;
