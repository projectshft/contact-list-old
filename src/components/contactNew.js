import {Link, Component} from 'react-router-dom'
import React from 'react'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'


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
        <form className="col-md-8 needs-validation" onSubmit={this.handleSubmitContactClick}>


        <label>Name</label>
        <input required type='text' className='form-control'value={this.state.name} onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Image_url</label>
        <input required type='text' className='form-control'onChange={event =>
          this.setState({ image_url: event.target.value })
        }/>

        <br/>

        <label>Email</label>
        <input required type='email' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <label>Phone Number</label>
        <input required type='text' pattern="[0-9]*" className='form-control' onChange={event =>
          this.setState({ phone: event.target.value })
        }/>
        <small id="phoneHelp" className="form-text text-muted">
          Please enter numerical values</small>


        <br/>

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <br/>

        <Link to='/contacts'>Back to Contact List</Link>
      </div>
    )
  }
}

export default ContactNew

ContactNew.propTypes = {
  contacts: PropTypes.array.isRequired

}
