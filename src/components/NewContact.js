import React, { Component } from 'react'
import PropTypes from 'prop-types'

//The NewContact component creates a form for the user
//To add a new contact's information to the contacts list
class NewContact extends Component {
  constructor() {
    super()

    //Create a state that will hold user input before using it to create a new contact
    this.state = {
      name: "",
      phone: "",
      email: "",
      imageURL: ""
    }

    this.onClick = this.onClick.bind(this)
  }

  //When the save button is clicked
  //Save user input in a new variable
  //Check that input is valid
  //Then add to the contacts list using the addContact function
  onClick () {
    //Create a new variable to hold user input
    const newContact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      imageURL: this.state.imageURL
    }

    //The validEmail function is used to ensure the user
    //has input a valid email address
    const validEmail = (email) => {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    //Conduct a series of test to make sure all the edited information is valid
    //And alerting the user if any of the information is invalid

    //Start by making sure the name field is not empty
    //And is not longer than 30 characters
    if (newContact.name.length == 0) {
      alert("The name field cannot be empty!")
      return true
    } else if (newContact.name.length > 30) {
      alert("The name field cannot be longer than 30 characters!")
      return true
    //Check to see if the user entered a ten digit phone number
  } else if (newContact.phone.length > 11 || newContact.phone.length < 10) {
      alert("Please enter a 10 digit phone number")
      return true
    //Call validEmail to ensure the user entered a valid email address
  } else if (!validEmail(newContact.email)) {
      alert ("Please enter a valid email!")
      return true
    //Make sure the user did not sumbit an empty image url
  } else if (newContact.imageURL.length == 0) {
      alert("Please enter a image url")
      return true
    }

    //If all inputs are valid
    //Add contact to contacts list
    //And reroute user back to the all contacts page
    this.props.addContact(newContact)
    this.props.history.push('/contacts')
  }


  //The render function will render a form
  //Where the user can input the new contact's
  //Name, phone number, email and image URL
  render() {
    return (
      <div>
        <div className="row">
          <div className="col col-sm-2.5"></div>
          <div className="col col-sm-8 col-md-7">
            {/* Create new contact form  */}
            <h2>New Contact</h2>
            <form className="form-group">
              {/* Create an input field for the new contact's name */}
              <input className="form-control" type="text" placeholder="Name" maxLength="20" onChange={event =>
                this.setState({ name: event.target.value })}></input>

              <br></br>

              {/* Create an input field for the new contact's phone number */}
              <input className="form-control" type="text" placeholder="Phone (Use only numbers 0-9, no slashes, dashes or dots)" maxLength="10" onChange={event =>
                this.setState({ phone: event.target.value })}></input>

              <br></br>

              {/* Create an input field for the new contact's email address */}
              <input className="form-control" type="text" placeholder="Email" maxLength="30" onChange={event =>
                this.setState({ email: event.target.value })}></input>

              <br></br>

              {/* Create an input field for the new contact's image url */}
              <input className="form-control"type="text" placeholder="Image" onChange={event =>
                this.setState({ imageURL: event.target.value })}></input>

              <br></br>

              {/* Create a button at the buttom of the page for saving the contact */}
              {/* Upon being pressed the button calls the onClick function */}
              <button className="btn btn-primary" onClick={this.onClick}>Save</button>
          </form>
          </div>
          <div className="col col-md-2.5"></div>
        </div>
      </div>
    );
  }
}

//Set prototypes for NewContact
NewContact.propTypes = {
  contactId: PropTypes.string,
  addContact: PropTypes.func
}

export default NewContact;
