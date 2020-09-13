import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class ContactNew extends Component {
  //this.props.contacts, this.props.addContact, this.props.history were passed by the Router

  constructor() {
    super();

    this.state = {
      id: '',
      name: '',
      email: '',
      telephone: '',
      imgSrc: '',
    };

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this);
  }

  handleSubmitContactClick() {
    console.log('clicked!');
    const newContact = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      telephone: this.state.telephone,
      imgSrc: this.state.imgSrc,
    };

    this.props.addContact(newContact);
    this.props.history.push('/contacts');
  }

  getRandom() {
    let newIdValue = Math.round(Math.random() * 10000);
    this.setState({
      id: newIdValue,
    });
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-1'>
            <div className='row back-clicker'></div>
            <Link to='/contacts'>Back</Link>
          </div>
          <h5 className='new-contact-details'>New Contact Details</h5>
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
                type='text'
                className='form-control'
                id='inputEmail'
                placeholder='Email'
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
                type='text'
                className='form-control'
                id='inputTelephone'
                placeholder='Telephone number'
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
                type='text'
                className='form-control'
                id='inputImage'
                placeholder='Link to an image (https://...)'
                onChange={(event) =>
                  this.setState({ imgSrc: event.target.value })
                }
              />
            </div>
          </div>

          <div className='form-group row'>
            <label htmlFor='inputId' className='col-sm-2 col-form-label'>
              Id
            </label>
            <div className='col-sm-6'>
              <input
                type='text'
                className='form-control'
                id='inputId'
                value=''
                onChange={(event) => this.setState({ id: event.target.value })}
              />
            </div>
          </div>
        </form>
        <br />
        <div className='row'>
          <button onClick={this.getRandom} type='button'>
            Generate Id
          </button>
        </div>
        <br />
        <br />
        <div className='row'>
          <button type='button' onClick={this.handleSubmitContactClick}>
            Submit
          </button>
        </div>
        <br />
      </div>
    );
  }
}

export default ContactNew;
