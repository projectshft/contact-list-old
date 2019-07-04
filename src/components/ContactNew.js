import React from 'react';
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

    // bind functions 
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  // handleAdd(event) {
  //   event.preventDefault();
  //   this.props.addContact(this.state);
  //   this.props.props.history.push('/');
  //   this.setState({name: '', email: '', phone_number: '', image_url: ''}); 
  // }

  handleAdd (e) {
    e.preventDefault(); 
    const newContact = this.state;
    sendEvent('addContact', newContact);
    this.props.props.history.push('/');
    this.setState({name: '', email: '', phone_number: '', image_url: ''}); 
  }

  render() {
    return (
      <div>
      <div>
        New Contact 
      </div>
      <form onSubmit={this.handleAdd} className="input-form">
      <input type="text" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Name"/> 
      <input type="text" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/> 
      <input type="text" id="phone_number" value={this.state.phone_number} onChange={this.handleChange} placeholder="Phone Number"/> 
      <input type="text" id="image_url" value={this.state.image_url} onChange={this.handleChange} placeholder="Image URL"/>  
      <button type="submit">Submit</button>
    </form>
    </div>
    )
  }

}

export default ContactNew; 