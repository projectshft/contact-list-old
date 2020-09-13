import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class ContactNew extends Component {
  render() {
    return (
      <div>
        <form className='add-contact-form'>
          <h3>Add a Contact</h3>
        </form>
        <Link to='/contacts'>Back</Link>
      </div>
    );
  }
}

export default ContactNew;
