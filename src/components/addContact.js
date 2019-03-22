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

  handleAddContactClick () {
    const newContact = {
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      email: this.state.email,
      phone: this.state.phone,
      imageURL: this.state.imageURL
    };

    this.props.addContact(newContact)
    this.props.props.history.push('/contacts')
  }

  render () {
    return (
      <div>
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

        <label>Phone</label>
        <input type='number' className='form-control' onChange={event =>
          this.setState({ phone: event.target.value })
        }/>

        <label>Image URL</label>
        <input type='url' className='form-control' onChange={event =>
          this.setState({ imageURL: event.target.value })
        }/>

        <button type="button" onClick={this.handleAddContactClick}>Add Contact</button>
        </form>

        <Link to='/contacts'>Contact List</Link>
      </div>
    )
  }
}

export default AddContact;