import React from 'react';
import { Link } from 'react-router-dom';

// This component handles adding a new contact to the contacts list

class AddContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      lastName: '',
      firstName: '',
      email: '',
      phone: '',
      imageURL: ''
    }

    this.handleAddContactClick = this.handleAddContactClick.bind(this)
  }

  // Generates a random number to use as the ID for a new contact

  generateId = () => Math.round(Math.random() * 100000000);

  /* When the Add Contact button is clicked this creates a new object based on the components current state.
     It then passes that object to the addContact function in Contacts.js and sends the user back to the
     contact list page. */

  handleAddContactClick () {
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
  }

  /* Creates all of the input fields for entering a new contact, a button to add the new contact, and
     a link back to the contacts list. As a user types into each input fields it updates the components current
     state as the input field changes.  */

  render () {
    return (
      <div className="container">
        <form>
          <label>First Name</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ firstName: event.target.value })
          }/>

          <br/>

          <label>Last Name</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ lastName: event.target.value })
          }/>

          <br/>

          <label>Email</label>
          <input type='email' className='form-control' onChange={event =>
            this.setState({ email: event.target.value })
          }/>

          <br/>

          <label>Phone</label>
          <input type='number' className='form-control' onChange={event =>
            this.setState({ phone: event.target.value })
          }/>

          <br/>

          <label>Image URL</label>
          <input type='url' className='form-control' onChange={event =>
            this.setState({ imageURL: event.target.value })
          }/>

          <br/>

          <button type="button" onClick={this.handleAddContactClick}>Add Contact</button>
        </form>

        <Link to='/contacts'>Contact List</Link>
      </div>
    )
  }
}

export default AddContact;