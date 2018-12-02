import React from 'react'
import StyledLink from './StyledLink.js'


class NewContact extends React.Component {
  constructor() {
    super ()

    this.state = {
      name: "",
      image_url: "",
      email: "",
      phone_number: "",
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this);
  }

  generateId () {
    return Math.round(Math.random() * 100000000)
  }

  handleSubmitContactClick (event) {
    const newContact = {
      id: this.generateId(),
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number,
    };
    console.log('Submit button pushed. newContact: ',newContact);
    this.props.addContact(newContact);
    this.props.props.history.push('/contacts');
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex flex-column">
          <h1>Add a New Contact</h1>
          <hr/>
          <form>
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              name="userName"
              placeholder="Firstname Lastname"
              onChange={event => this.setState({ name: event.target.value })}
            />
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="userEmail"
              placeholder="example@gmail.com"
              onChange={event => this.setState({ email: event.target.value })}
            />
            <label>Phone Number:</label>
            <input
              className="form-control"
              type="tel"
              name="userPhoneNumber"
              placeholder="234-567-8901"
              onChange={event => this.setState({ phone_number: event.target.value })}
            />
            <label>Image URL:</label>
            <input
              className="form-control"
              type="url"
              name="userImage"
              placeholder="URL path"
              onChange={event => this.setState({ image_url: event.target.value })}
            />
            <button className="btn btn-primary" type="button" name="submitButton"
              onClick={this.handleSubmitContactClick}>Submit</button>
          </form>
        </div>
        <hr/>
        <p><StyledLink to='/contacts/'>back</StyledLink></p>
      </div>
      )
    }

}

export default NewContact
