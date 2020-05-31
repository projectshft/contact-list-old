import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';



//this component will show a form to fill out using input fields (name, phone, email) and upload an image from the user's computer. The data will be stored in a local state and use the 'addContact' prop that was passed down from the main App to add the newContact to the 'global' state in App. 
class NewContactForm extends Component {
  constructor(props) {
    super(props)

    //this will generate a new id every time the contact form component is instantiated, automatically assigning our temp state here the id that is randomly generated
    const newId = this.generateId();

    //this is the state/data holder for our form, that is updated when the user interacts with the page (entering text in the fields, or uploading an image from their computer). The state is set using setState in our onChange handlers and the fileToURL handler
    this.state = {
        id: newId,
        name: '',
        phone: '',
        email: '',
        img: null
    }

  }

  //this will generate a new id every time the 'Add contact' button is clicked, which instantiates a new contact form component
  generateId() {
    return Math.round(Math.random() * 100000000)
  }

  //this event handler will be triggered every time a user makes a keypress in the input fields. We can update the name, phone and email properties of the state in one generalized function by using the event's own properties. 
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //this function will validate the email address provided, eg, checking for an @ symbol and correct extension
  validateEmailInput = email => {

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    if (validEmailRegex.test(email)) {
      return true;
    } else {
      return false;
    }

  }

  //this function is used to handle the file that is uploaded by the user. It is triggered when the user selects a file. We instantiate a new File reader and grab the target of the event (the file, which will be in the target's files array at the zero index). We'll check that the file exists and use the reader to transform the file into data that we can store and display
  handleFile = event => {

    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file,
        img: reader.result
      })
    }

    if (file) {
      reader.readAsDataURL(file);
    }

  }

  validatePhoneInput = (phoneNumber, contact) => {
     
     if (!isNaN(phoneNumber)) {
      if (phoneNumber.length === 7) {
        // console.log(phone)
        let newPhone = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(-4);
        // console.log(newPhone);
        contact.phone = newPhone;
        return true;
      } else if (phoneNumber.length === 10) {
        let newPhone = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3, 6) + '-' + phoneNumber.slice(-4);
        // console.log(newPhone);
        contact.phone = newPhone;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }  

  //This function will check if the name and email fields are filled out correctly. The name and email fields are required, and the email must be in the correct format. If these validation checks fail, we'll prevent the link from taking us back to the '/contact' page and we'll alert the user to the requirements. If the fields are filled out correctly, we are good to use our addContact prop (that we passed down from App) to add the newContact to our contacts array and return to the '/contact' page. 
  handleFormSubmission = event => {
    const newContact = Object.assign({}, this.state)

    // this.validateEmailInput(newContact)
    // this.validatePhoneInput(newContact)

    // if (!this.validatePhoneNumber(newContact)) {
    //   event.preventDefault();
    //   window.alert('Please enter a valid phone number')
    // }

    


    if (!this.validateEmailInput(newContact.email)) {
      event.preventDefault();
      window.alert('A valid email must be provided to create a contact')

    } else if (!newContact.name) {
      event.preventDefault();
      window.alert('A name must be provided to create a contact')

    } else if (!this.validatePhoneInput(newContact.phone, newContact)) {
      event.preventDefault();
      window.alert('A valid phone must be provided to create a contact')

    } else if (!newContact.img) {
      event.preventDefault();
      window.alert('An image must be uploaded to create a contact')
    
    } else { 
      console.log(newContact)
      this.props.addContact(newContact);
      this.props.history.push('/contact')
    }

  }


  render() {
    return (
      <div>
        <div className="row offset-md-1 heading">
          <h1>New Contact Form</h1>
        </div>
        <form className="offset-md-1">
          <div className="form-group row">
            <label className="col-md-1">Name: </label>
            <input className="col-md-3" type="text" name="name" onChange={this.handleInput} />
          </div>
          <div className="form-group row">
            <label className="col-md-1">Email: </label>
            <input className="col-md-3" type="text" name="email" onChange={this.handleInput} />
          </div>
          <div className="form-group row">
            <label className="col-md-1">Phone: </label>
            <input className="col-md-3" type="text" name="phone" onChange={this.handleInput} />
          </div>
          <div className="form-group row">
            <label className="col-md-1">Picture: </label>
            <input type="file" className="col-md-3"
              onChange={this.handleFile}
            />
          </div>
          <div className="form-group row">
            <button type="button" className="col-md-1 offset-md-1"><Link onClick={event => this.handleFormSubmission(event)} to="/contact">Submit</Link></button>
            <button className="col-md-1 offset-md-1"><Link to="/contact">Cancel</Link></button>
          </div>
        </form>

      </div>
    )
  }

}

//we want to validate that the props we're receiving from App are the types we expect
NewContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default NewContactForm