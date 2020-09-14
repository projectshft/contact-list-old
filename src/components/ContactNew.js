import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


//A class component because it has state and defines a new function
class ContactNew extends Component {
  //contacts, addContact, history props were passed by the Router

  constructor() {
    super();

    //Set the default state for this new contact object. ID will be calculated quasi-randomly.  
    this.state = {
      id: Math.round(Math.random() * 10000),
      name: '',
      email: '',
      telephone: '',
      imgSrc: '',
    };

    //bind this click handler to this component
    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this);
  }

  handleSubmitContactClick() {
    //When submit is clicked, check that name, email, and phone are populated. Alert if not.
    if (!document.getElementById("inputName").value || !document.getElementById("inputEmail").value || !document.getElementById("inputTelephone").value) {
      alert("Please complete at least Name, Email, and Phone fields. Include a placeholder value if necessary");
    } else {
      //Assign the state object to a new variable 
      const newContact = {
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        telephone: this.state.telephone,
        imgSrc: this.state.imgSrc,
      };

      //Carry the new contact to the addContact function (in App.js).
      this.props.addContact(newContact);
      //Return to the contact list page.
      this.props.history.push('/contacts');
    }
  }

  //The entry form for new contacts with bootstrap styling
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-1'>
            <div className='row back-clicker'></div>
            <Link className='back-text' to='/contacts'>Back</Link>
          </div>
          <h5 className='new-contact-details'>New Contact</h5>
          <br />
        </div>
        <form className='add-contact-form'>
          <div className='form-group row'>
            <label htmlFor='inputName' className='col-sm-2 col-form-label'>
              Name
            </label>
            <div className='col-sm-6'>
              <input
                type='text'
                className='form-control'
                id='inputName'
                placeholder='Name'
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='inputEmail' className='col-sm-2 col-form-label'>
              Email
            </label>
            <div className='col-sm-6'>
              <input
                type='email'
                className='form-control'
                id='inputEmail'
                placeholder='Email address'
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='inputTelephone' className='col-sm-2 col-form-label'>
              Phone
            </label>
            <div className='col-sm-6'>
              <input
                type='tel'
                className='form-control'
                id='inputTelephone'
                placeholder="1234567890"
                onChange={(event) =>
                  this.setState({ telephone: event.target.value })
                }
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='inputImage' className='col-sm-2 col-form-label'>
              Image
            </label>
            <div className='col-sm-6'>
              <input
                type='url'
                className='form-control'
                id='inputImage'
                placeholder='Link to an image (https://...)'
                onChange={(event) =>
                  this.setState({ imgSrc: event.target.value })
                }
              />
            </div>
          </div>         
        </form>
        <div className='row'>
          {/* See above for the button click handler function */}
          <button className='submit-button' type='button' onClick={this.handleSubmitContactClick}>
            Submit
          </button>
        </div>
        <br />
      </div>
    );
  }
}

ContactNew.propTypes = {
  contacts: PropTypes.array.isRequired,
};
ContactNew.propTypes = {
  addContact: PropTypes.string.isRequired
};
ContactNew.propTypes = {
  history: PropTypes.string.isRequired
};

export default ContactNew;
