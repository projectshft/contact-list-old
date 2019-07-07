import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class EditContact extends Component {
  constructor(props) {
    super(props);

    //destructuring so the state object matches state object in NewContact component
    // it is one Contact object
    // if you change this, change NewContact as well so forms work the same for both components
    this.state={..._.find(this.props.contacts, {id: +this.props.props.match.params.id})};
    
    //handle submission by calling app's edit contact function
    //needs to be bound
    this.handleEditContactClick = this.handleEditContactClick.bind(this);
  }

  handleEditContactClick() {
    //validate input first - will allow no image src
    if ( this.state.name === '' ||
         this.state.email === '' ||
         this.state.phoneNumber === '') {
      //for now console log error and ignore click
      console.log('enter a name, email, and phone number');
      return;
      //later add warning to user
    }

    const updatedContact = {
      id: this.state.id,
      name: this.state.name,
      image: this.state.image,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber
    };

    this.props.editContact(updatedContact);
    this.props.props.history.push(`/contacts/${updatedContact.id}`);
  }

  render() {
    return (
      <div>
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
          <button type='button' className='btn btn-primary' onClick={this.handleEditContactClick}>Edit Contact</button>
        </form>
        <Link to={`/contacts/${this.state.id}`}>Cancel</Link>
      </div>
    )
  }
}

export default EditContact;