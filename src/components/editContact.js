import React, { Component } from 'react';
import {Link } from 'react-router-dom'

import { sendEvent, queryState } from '../state';
import '../App.css';

class EditContact extends Component {
  constructor(props) {
    super(props);

    const contact = queryState('getContact', parseInt(this.props.match.params.number, 10))

    this.state = contact

  }
//submit the edit by executing a function
  submitEdit = () => {
//format 10 digit phoneNumber to (###) ###-####
    const numberFormater =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    /*next line is used to submit edit if nothing was changed since this.state.phoneNumber is in a number format and won't pass the validations below*/
    let phoneNumbers = this.state.phoneNumber.replace(/[\D\s\._\-]+/g, "");
    let phoneNumber = this.state.phoneNumber.replace(numberFormater,"($1) $2-$3")

//create JS object that holds the new contact information
    console.log(phoneNumber)
    const newDetails = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: phoneNumber ? phoneNumber : this.state.phoneNumber,
      imgURL: this.state.imgURL
    }

//if passes validation, add the contact, otherwise alert what isn't passing validation
    if(phoneNumbers.length===10 && this.state.firstName && this.state.lastName){
      sendEvent('editContact', newDetails)
      this.props.history.push('/')
    }
    else{
      if(phoneNumbers.length!==10){
        alert('Phone Number expects 10 digits')
      }
      else if(!this.state.firstName){
        alert('First Name is a required field.')
      }
      else if(!this.state.lastName){
        alert('Last Name is a required field.')
      }
    }
  }

  render() {

    if((!this.state)){
      return (
        <div className="container box-center py-3 my-3 border border-dark">
        <h1>Contact does not exist</h1>
        <Link to='/'>Back</Link>
        </div>
      )
    }

    return (
      <div className="container box-center py-3 my-3 border border-dark">
        <div className="row py-1">
          <div className="col-sm-4">

            <h4>First Name:</h4>
            <input
              className="form-control add-first-name"
              value={this.state.firstName}
              onChange={event => {
                let firstName = event.target.value;
                //filter out all non-letter characters
                firstName = firstName.replace(/[\W\d\s\._\-]+/g, "");
                  this.setState({firstName: firstName})
              }}
            />

          </div>
          <div className="col-sm-4">

            <h4>Last Name:</h4>
            <input
              className="form-control add-last-name"
              value={this.state.lastName}
              onChange={event => {
                let lastName = event.target.value;
                //filter out all non-letter characters
                lastName = lastName.replace(/[\W\d\s\._\-]+/g, "");
                this.setState({lastName: lastName})
              }}
            />

          </div>
        </div>

        <div className="row py-1">
          <div className="col-sm-4">

            <h4>Email:</h4>
            <input
              className="form-control add-email"
              value={this.state.email}
              onChange={event => this.setState({email: event.target.value})}
            />

          </div>
          <div className="col-sm-4">

            <h4>Phone Number:</h4>
            <input
              className="form-control add-number"
              value={this.state.phoneNumber.replace(/[\D\s\._\-]+/g, "")}
              onChange={event =>{
                let phoneNumber = event.target.value;
                //filter out all non-number characters
                phoneNumber = phoneNumber.replace(/[\D\s\._\-]+/g, "");
                if(phoneNumber.length<=10){
                  this.setState({phoneNumber: phoneNumber})
                }
              }}
            />

          </div>
        </div>

        <div className="row py-1">
          <div className="col-sm-8">

            <h4>Image URL:</h4>
            <input
              className="form-control input-group add-img-url"
              value={this.state.imgURL}
              onChange={event => this.setState({imgURL: event.target.value})}
            />

          </div>
        </div>
        <div className="row py-1">
          <Link to='/'>
            <button className="btn text-height btn-gray mx-4"> Back </button>
          </Link>

            <button onClick={this.submitEdit} className="btn text-height btn-gray mx-4"> Submit Edit </button>

        </div>
      </div>
    );
  }
}

export default EditContact
