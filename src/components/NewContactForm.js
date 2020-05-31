import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



//this component will show a form to fill out using input fields (name, phone, email) and upload an image from the user's computer. The data will be stored in a temp state and use the 'addContact' prop that was passed down from the main App. The is the way we will add a new user to our global state
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

    //this.handleSubmitClick = this.handleSubmitClick.bind(this)
    //this.generateId = this.generateId.bind(this)


  }
  //when the Submit button is clicked, we create a new object based on our state and using the prop function addContact (passed down from App), we add the new contact to our state in that component
  //because we're using arrow functions, we don't need to bind 'this' to the function to tie it to this component
  submitButtonHandler = () => {
    const newContact = Object.assign({}, this.state)
    console.log(this.state)
    console.log(newContact)
    //we passed in the add contact function as a prop when we instantiated the form
    this.props.addContact(newContact);
    //we passed in the history prop when we instantiated the form
    this.props.history.push('/contact')
  }

  //this will generate a new id every time the 'Add contact' button is clicked, which instantiates a new contact form component
  generateId() {
    return Math.round(Math.random() * 100000000)
  }

//this event handler will be triggered every time a user types in the input fields. We can update the name, phone and email properties of the state in one generalized function by using the event's own properties. 
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
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
            <button type="button" className="col-md-1 offset-md-1" onClick={this.submitButtonHandler}><Link to="/contact">Submit</Link></button>
            <button className="col-md-1 offset-md-1"><Link to="/contact">Cancel</Link></button>
          </div>
        </form>

      </div>
    )
  }

}


export default NewContactForm