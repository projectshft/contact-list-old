import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import TextInputGroup from './TextInputGroup'
import PropTypes from 'prop-types'

//we will use a class component because add contact will be stateful
export class AddContact extends Component {
  //addContact should hold it's own state from the input fields
  state = {
    fname: '',
    lname: '',
    email: '',
    phone_number: '',
    image_url: '',
    errors: {}
  }

  //AddContact should set state when changes to the input fields happen
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  //Users should be able to click submit and their new contact be added to Contacts//interactive in the same way as the other contacts
  onSubmit = e => {
    e.preventDefault()

    console.log('The user input looks like:', this.state)

    //check for empty fields/errors in input
    if (this.state.fname === '') {
      //if field is empty, set state to have an appropriate error
      this.setState({ errors: { fname: 'First name is required' } })
      //prevent form from submitting if the field is empty
      return
    }
    if (this.state.fname.length > 20) {
      this.setState({
        errors: { fname: 'First name must be shorter than 20 characters' }
      })
      return
    }
    if (this.state.lname === '') {
      this.setState({ errors: { lname: 'Last name is required' } })
      return
    }
    if (this.state.lname.length > 20) {
      this.setState({
        errors: { lname: 'Last name must be shorter than 20 characters' }
      })
      return
    }
    if (this.state.phone_number === '' || this.state.phone_number.length > 10) {
      this.setState({
        errors: {
          phone_number: 'A valid phone number without dashes is required'
        }
      })
      return
    }
    if (this.state.email === '') {
      this.setState({ errors: { email: 'Email address is required' } })
      return
    }

    if (this.state.email.split('').filter(x => x === '@').length !== 1) {
      this.setState({ errors: { email: 'Email should contain a @' } })
      return
    }

    if (this.state.email.indexOf('.') === -1) {
      this.setState({
        errors: { email: 'Email should contain at least one dot' }
      })
      return
    }

    if (this.state.image_url === '') {
      this.setState({ errors: { image_url: 'Contact photo is required' } })
      return
    }

    //AddContact should take in props from App's router
    this.props.addContact(
      this.state.fname,
      this.state.lname,
      this.state.phone_number,
      this.state.email,
      this.state.image_url
    )

    //clear state after submit (or enter) is pressed
    this.setState({
      fname: '',
      lname: '',
      phone_number: '',
      email: '',
      image_url: '',
      errors: {}
    })

    // After clicking "submit", the user should be re-routed back to the /contacts view where they'll see all their contact.
    let path = `/contacts/`
    this.props.history.push(path)
  }

  //Users should be able to press Enter and their new contact be added to Contacts//interactive in the same way as the other contacts
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      //pressing enter should have the same functionality as calling onSubmit()
      this.onSubmit(e)
    }
  }
  // After clicking "submit", the user should be re-routed back to the /contacts view where they'll see all their contact.
  render() {
    //destructure
    const { fname, lname, phone_number, email, image_url, errors } = this.state

    //addContact should have input fields to create a new contact
    return (
      <div>
        <h3 className="text-center" style={titleStyle}>
          Add New Contact
        </h3>
        <div className="col-md-6 offset-md-3 shadow-sm" style={formStyle}>
          <div className="row">
            <form
              name="addContact"
              onSubmit={this.onSubmit}
              onKeyPress={this.handleKeyPress}
              className="offset-md-4"
            >
              <TextInputGroup
                label="First Name"
                name="fname"
                placeholder="Enter First Name"
                value={fname}
                onChange={this.onChange}
                error={errors.fname}
              />
              <TextInputGroup
                label="Last Name"
                name="lname"
                placeholder="Enter Last Name"
                value={lname}
                onChange={this.onChange}
                error={errors.lname}
              />
              <TextInputGroup
                label="Phone Number"
                name="phone_number"
                placeholder="Enter Phone Number"
                value={phone_number}
                onChange={this.onChange}
                error={errors.phone_number}
              />
              <TextInputGroup
                label="Email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
              />
              <TextInputGroup
                label="Photo"
                name="image_url"
                type="url"
                placeholder="Enter image URL"
                value={image_url}
                onChange={this.onChange}
                error={errors.image_url}
              />

              <Link to="/contacts">
                <button className="btn-dark btn btn-sm">
                  Back to Contacts
                </button>
              </Link>
              <input
                type="submit"
                className="btn-light btn btn-sm float-right"
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
const titleStyle = {
  color: '#b19999'
}
const formStyle = {
  //backgroundColor: '#b19999',
  padding: '1em'
}

//PropTypes
AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func
}

//enable AddContact to redirect to contacts after form submission
export default withRouter(AddContact)
