import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

// This component handles editing a current contact

class EditContact extends React.Component {
  constructor (props) {
    super (props)

    const contact = _.find(this.props.contacts, { id: parseInt(this.props.routerProps.match.params.id, 10) });

    this.state = {
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
      imageURL: contact.imageURL
    }

    this.handleEditContactClick = this.handleEditContactClick.bind(this);
  }

  /* When the Edit Contact button is clicked this first checks to see if all required fields 
     were filled in and if not alerts the user.  It then creates a new object based on the components 
     current state and passes that object to the editContact function in Contacts.js then
     sends the user back to the contact list page. */

  handleEditContactClick () {
    if (this.state.firstName && this.state.lastName && this.state.email) {
      const editContact = {
        id: this.state.id,
        lastName: this.state.lastName,
        firstName: this.state.firstName,
        email: this.state.email,
        phone: this.state.phone,
        imageURL: this.state.imageURL
      };      

      this.props.editContact(editContact);
      this.props.routerProps.history.push('/contacts');

    } else {
      alert('You did not fill in all required fields');
    }
  }

  /* Creates all of the input fields for editing a contact with their current value set when the form loads, 
     a button to edit the contact, and a link back to the contacts list. As a user types into each input 
     fields it updates the components current state as the input field changes.  */

  render () {
    return (
      <div className="container" style={{marginTop: 50}}>
        <form>
          <label>First Name *</label>
          <input type='text' className='form-control' value={this.state.firstName} onChange={event =>
            this.setState({ firstName: event.target.value })
          } autoFocus/>

          <br/>

          <label>Last Name *</label>
          <input type='text' className='form-control' value={this.state.lastName} onChange={event =>
            this.setState({ lastName: event.target.value })
          }/>

          <br/>

          <label>Email *</label>
          <input type='email' className='form-control' value={this.state.email} onChange={event =>
            this.setState({ email: event.target.value })
          }/>

          <br/>

          <label>Phone</label>
          <input type='text' className='form-control' value={this.state.phone} onChange={event =>
            this.setState({ phone: event.target.value })
          }/>

          <br/>

          <label>Image URL</label>
          <input type='url' className='form-control' value={this.state.imageURL} onChange={event =>
            this.setState({ imageURL: event.target.value })
          }/>

          <br/>

          <button type="button" className='btn btn-primary' onClick={this.handleEditContactClick}>Edit Contact</button>
        </form>

        <br/>

        <Link to='/contacts'>Back To Contact List</Link>
      </div>
    )
  }
}

EditContact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  editContact: PropTypes.func.isRequired,
  routerProps: PropTypes.object.isRequired  
};

export default EditContact;