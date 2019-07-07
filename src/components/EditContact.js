import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class EditContact extends Component {
  constructor(props) {
    super(props);

    this.state={
      currentContact: _.find(this.props.contacts, {id: +this.props.props.match.params.id})
    };
    
    //handle submission by calling app's edit contact function
    //needs to be bound
  }

  render() {
    return (
      <div>
        <form>
          <label>Name</label>
          <input type='text' className='form-control' placeholder={this.state.currentContact.name}
          onChange={event =>
            this.setState({ name: event.target.value })
          } />
          <label>Email</label>
          <input type='text' className='form-control' placeholder={this.state.currentContact.email}
          onChange={event =>
            this.setState({ email: event.target.value })
          } />
          <label>Phone Number</label>
          <input type='text' className='form-control' placeholder={this.state.currentContact.phoneNumber}
          onChange={event =>
            this.setState({ phoneNumber: event.target.value })
          } />
          <label>Image source - you can leave this blank</label>
          <input type='text' className='form-control' placeholder={this.state.currentContact.image}
          onChange={event =>
            this.setState({ image: event.target.value })
          }/>
          <button type='button' className='btn btn-primary' onClick={this.handleCreateNewContactClick}>Create New Contact</button>
        </form>
        <Link to={`/contacts/${this.state.currentContact.id}`}>Cancel</Link>
      </div>
    )
  }
}

export default EditContact;