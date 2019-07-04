import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class NewContact extends Component {
  constructor() {
    super();

    //go ahead and generate id on creation
    this.state = {
      id: generateId(),
      name: '',
      image: '',
      email: '',
      phoneNumber: ''
    };

    this.handleCreateNewContactClick = this.handleCreateNewContactClick.bind(this);
  }

  handleCreateNewContactClick() {
    //validate input first - will allow no image src
    if ( this.state.name === '' ||
         this.state.email === '' ||
         this.state.phoneNumber === '') {
      //for now console log error and ignore click
      console.log('enter a name, email, and phone number');
      return;
      //later add warning to user
    }

    //set default image if one wasn't provided
    if (this.state.image === '')
      this.state.image = 'https://upload.wikimedia.org/wikipedia/en/1/13/Stick_figure.png';
    
    const newContact = {
      id: this.state.id,
      name: this.state.name,
      image: this.state.image,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber
    };

    this.props.addContact(newContact);
    this.props.props.history.push('/contacts');
  }

  render() {
    return (
      <div>
        <form>
          <label>Name</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ name: event.target.value })
          } />
          <label>Email</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ email: event.target.value })
          } />
          <label>Phone Number</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ phoneNumber: event.target.value })
          } />
          <label>Image source - you can leave this blank</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ image: event.target.value })
          }/>
          <button type='button' className='btn btn-primary' onClick={this.handleCreateNewContactClick}>Create New Contact</button>
        </form>
        <Link to='/contacts'>Cancel</Link>
      </div>
    )
  }
}

NewContact.propTypes = {
  addContact: PropTypes.func
};

 //chance of collisions pretty low
const generateId = () => Math.round(Math.random() * 100000000)

export default NewContact;