import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ContactForm can handle all the logic that NewContact and EditContact are handling
 * Make New/EditContact pure components that pass state and functions to ContactForm
 * 
 * NewContact only receives addContact function
 * EditContact receives router props, contacts array, editContact function
 */


class ContactForm extends Component {
  constructor(props) {
    super(props);

    if (this.props.contact === undefined) {
      this.state = {
        id: generateId(),
        name: '',
        image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Stick_figure.png',
        email: '',
        phoneNumber: '',
        buttonText: 'Add Contact'
      };
    }
    else {
      this.state = {
        id: this.props.contact.id,
        name: this.props.contact.name,
        image: this.props.contact.image,
        email: this.props.contact.email,
        phoneNumber: this.props.contact.phoneNumber,
        buttonText: 'Edit Contact'
      };
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if ( this.state.name === '' ||
         this.state.email === '' ||
         this.state.phoneNumber === '') {
      //for now console log error and ignore click
      console.log('enter a name, email, and phone number');
      return;
      //later add warning to user
    }
    
    const newOrUpdatedContact = {
      id: this.state.id,
      name: this.state.name,
      image: this.state.image,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber
    };

    if (this.props.addContact !== undefined) {
      this.props.addContact(newOrUpdatedContact);
      this.props.props.history.push('/contacts');
    }
    else {
      this.props.editContact(newOrUpdatedContact);
      this.props.props.history.push(`/contacts/${newOrUpdatedContact.id}`);
    }
  }

  render() {
    return (
      <form>
        <label>Name</label>
        <input type='text' className='form-control' placeholder={this.state.name}
        onChange={event =>
          this.setState({ name: event.target.value })
        } />
        <label>Email</label>
        <input type='text' className='form-control' placeholder={this.state.email}
        onChange={event =>
          this.setState({ email: event.target.value })
        } />
        <label>Phone Number</label>
        <input type='text' className='form-control' placeholder={this.state.phoneNumber}
        onChange={event =>
          this.setState({ phoneNumber: event.target.value })
        } />
        <label>Image source - you can leave this blank</label>
        <input type='text' className='form-control' placeholder={this.state.image}
        onChange={event =>
          this.setState({ image: event.target.value })
        }/>
        <button type='button' className='btn btn-primary' onClick={this.handleClick}>{this.state.buttonText}</button>
      </form>
    )
  }

}

//chance of collisions pretty low
const generateId = () => Math.round(Math.random() * 100000000);

ContactForm.propTypes = {
  addContact: PropTypes.func,
  editContact: PropTypes.func,
  contacts: PropTypes.array,
  props: PropTypes.object
};

export default ContactForm;