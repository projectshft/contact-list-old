import React from 'react';
import { Link } from 'react-router-dom'; 
import { sendEvent } from './State';

class ContactNew extends React.Component {

  constructor() {
    super()
    // state for adding contacts 
    this.state = {
      name: '',
      email: '',
      phone_number: '',
      image_url: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleValidation() {
    const errors = []; 
    if (this.state.name === '') {
      errors.push('You must enter a name.');
    }
    if (this.state.email !== '') {
      let lastAtPos = this.state.email.lastIndexOf('@');
      let lastDotPos = this.state.email.lastIndexOf('.');
      if (!(lastAtPos < lastDotPos 
        && lastAtPos > 0 
        && this.state.email.indexOf('@@') === -1 
        && lastDotPos > 2 
        && (this.state.email.length - lastDotPos) > 2)) {
          errors.push('If you include an email address, it must be valid.');
      }
    }
    if (this.state.phone_number !== '') {
      if(!this.state.phone_number.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)) {
        errors.push('If you include a phone number, it must be valid.')
      }
    }
    return errors.join(' '); 
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleAdd(e) {
    e.preventDefault();
    const error = this.handleValidation();
    if (!error) {
      const newContact = this.state;
      sendEvent('addContact', newContact);
      this.props.history.push('/');
      this.setState({ name: '', email: '', phone_number: '', image_url: '' });
    } else {
      alert(error); 
    }
  }

  render() {
    return (
      <div>
        <div className='page-title'>
          New Contact
        </div>
        <div>
        <button className="btn btn-light"><Link to='/'>&laquo; Back to Contacts</Link></button>
        </div>
        <form onSubmit={this.handleAdd} className="input-form">
          <input className="form-control" type="text" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
          <input className="form-control" type="text" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
          <input className="form-control" type="text" id="phone_number" value={this.state.phone_number} onChange={this.handleChange} placeholder="Phone Number" />
          <input className="form-control" type="text" id="image_url" value={this.state.image_url} onChange={this.handleChange} placeholder="Image URL" />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default ContactNew; 