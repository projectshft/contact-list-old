import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

//we will use a class component because add contact will be stateful
export class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone_number: '',
    image_url: '',
    errors: {}
  }

  //AddContact should set state when changes to the input fields happen
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  //Users should be able to click submit and their new contact be added to Contacts
  onSubmit = e => {
    e.preventDefault()

    //check for empty fields/errors in input
    if (this.state.name === '') {
      //if field is empty, set state to have an appropriate error
      this.setState({ errors: { name: 'Name is required' } })
      //prevent form from submitting if the field is empty
      return
    }

    if (this.state.phone_number === '' || this.state.phone_number.length > 10) {
      this.setState({
        errors: {
          phone_number: 'Phone number is required'
        }
      })
      return
    }
    if (this.state.email === '') {
      this.setState({ errors: { email: 'Email address is required' } })
      return
    }

    if (this.state.image_url === '') {
      this.setState({ errors: { image_url: 'Photo is required' } })
      return
    }

    //AddContact should take in props from App's router
    this.props.addContact(
      this.state.name,
      this.state.phone_number,
      this.state.email,
      this.state.image_url
    )

    //clear state after submit (or enter) is pressed
    this.setState({
      name: '',
      phone_number: '',
      email: '',
      image_url: '',
      errors: {}
    })

    // After clicking "submit", the user should be re-routed back to the /contacts view where they'll see all their contacts.
    let path = `/contacts/`
    this.props.history.push(path)
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      //pressing enter should have the same functionality as calling onSubmit()
      this.onSubmit(e)
    }
  }
  // After clicking "submit", the user should be re-routed back to the /contacts view where they'll see all their contacts.
  render() {
    //destructure
    const { name, phone_number, email, image_url, errors } = this.state

    //addContact should have input fields to create a new contact
    return (
      <div>
        <h3 className="text-center"> Add New Contact </h3>
        <div className="col-md-6 offset-md-3 shadow-sm">
          <div className="row">
            <form
              name="addContact"
              onSubmit={this.onSubmit}
              onKeyPress={this.handleKeyPress}
              className="offset-md-4"
            >
              <input
                label="Name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.onChange}
                error={errors.name}
              />

              <input
                label="Phone Number"
                name="phone_number"
                placeholder="Phone Number"
                value={phone_number}
                onChange={this.onChange}
                error={errors.phone_number}
              />
              <input
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
              />
              <input
                label="Photo"
                name="image_url"
                type="url"
                placeholder="Image URL"
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
                className="btn-dark btn btn-sm float-right"
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}


//PropTypes
AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func
}

//enable AddContact to redirect to contacts after form submission
export default withRouter(AddContact)
