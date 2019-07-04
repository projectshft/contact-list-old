import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class NewContact extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      name: '',
      image: '',
      email: '',
      phoneNumber: ''
    };
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
          <label>Image source</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ image: event.target.value })
          }/>
        </form>
      </div>
    )
  }
}

NewContact.propTypes = {
  addContact: PropTypes.func
};

export default NewContact;