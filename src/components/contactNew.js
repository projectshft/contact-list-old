import { Link, Component } from 'react-router-dom'
import React from 'react'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types';


class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
      id: uuid(),
      name: '',
      image_url: '',
      email: '',
      phone: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick () {
    const newContact = {
      id: this.state.id,
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone: this.state.phone
    };

    this.props.addContact(newContact)
    this.props.history.push('/contacts')
  }

  render () {
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Image_url</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ image_url: event.target.value })
        }/>

        <br/>

        <label>Email</label>
        <input type='email' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <label>Phone Number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phone: parseInt(event.target.value, 10) })
        }/>

        <br/>

        <button type="button" className="btn btn-primary" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <br/>

        <Link to='/contacts'>Back to Contact List</Link>
      </div>
    )
  }
}

export default ContactNew

// ContactNew.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   addContact: PropTypes.func.isRequired,
//   updateContact: PropTypes.func.isRequired,
//   deleteContact: PropTypes.func.isRequired
// }
