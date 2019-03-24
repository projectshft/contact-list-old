import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// This component handles adding a new contact to the contacts list

class AddContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      imageURL: 'http://chittagongit.com//images/default-user-icon/default-user-icon-14.jpg'
    }

    this.handleAddContactClick = this.handleAddContactClick.bind(this)
  }

  // Generates a random number to use as the ID for a new contact

  generateId = () => Math.round(Math.random() * 100000000);

  /* When the Add Contact button is clicked this first checks to see if all required fields 
     were filled in and if not alerts the user.  It then creates a new object based on the components 
     current state and passes that object to the addContact function in Contacts.js then
     sends the user back to the contact list page. */

  handleAddContactClick () {
    if (this.state.firstName && this.state.lastName && this.state.email) {
      const newContact = {
        id: this.generateId(),
        lastName: this.state.lastName,
        firstName: this.state.firstName,
        email: this.state.email,
        phone: this.state.phone,
        imageURL: this.state.imageURL
      };      

      this.props.addContact(newContact);
      this.props.routerProps.history.push('/contacts');

    } else {
      alert('You did not fill in all required fields');
    }
  }

  /* Creates all of the input fields for entering a new contact, a button to add the new contact, and
     a link back to the contacts list. As a user types into each input fields it updates the components current
     state as the input field changes.  */

  render () {
    return (
      <div className="container" style={{marginTop: 50}}>
        <form>
          <label>First Name *</label>
          <input type='text' className='form-control' placeholder="Enter First Name (required)" onChange={event =>
            this.setState({ firstName: event.target.value })
          } autoFocus/>

          <br/>

          <label>Last Name *</label>
          <input type='text' className='form-control' placeholder="Enter Last Name (required)" onChange={event =>
            this.setState({ lastName: event.target.value })
          }/>

          <br/>

          <label>Email *</label>
          <input type='email' className='form-control' placeholder="Enter Email Address (required)" onChange={event =>
            this.setState({ email: event.target.value })
          }/>

          <br/>

          <label>Phone</label>
          <input type='text' className='form-control' placeholder="Enter Phone Number" onChange={event =>
            this.setState({ phone: event.target.value })
          }/>

          <br/>

          <label>Image URL</label>
          <input type='url' className='form-control' placeholder="Enter Image URL" onChange={event =>
            this.setState({ imageURL: event.target.value })
          }/>

          <br/>

          <button type="button" className='btn btn-primary' onClick={this.handleAddContactClick}>Add Contact</button>
        </form>

        <br/>

        <Link to='/contacts'>Back To Contact List</Link>
      </div>
    )
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
  routerProps: PropTypes.object.isRequired  
};

export default AddContact;