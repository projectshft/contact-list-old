import React from 'react'
import StyledLink from './StyledLink.js'
import PropTypes from 'prop-types';


class NewContact extends React.Component {
  constructor(props) {
    super (props)

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

  isInputValid () {
    const phoneRegEx1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phoneRegEx2 = /^\d{10}$/;
    const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let isEmailValid = true;

    if (this.state.email) {
      isEmailValid = (this.state.email.match(emailRegEx));
    }
    return (this.state.name && this.state.phone_number.match(phoneRegEx1||phoneRegEx2) && isEmailValid);
  }

  handleSubmitContactClick (event) {
    if (this.isInputValid()){

      const newContact = {
        id: this.generateId(),
        name: this.state.name,
        image_url: (this.state.image_url ||'https://www.libertyspecialtymarkets.com/wp-content/uploads/2017/01/profile-default.jpg'),
        email: (this.state.email || 'N/A'),
        phone_number: this.state.phone_number,
      };

      this.props.addContact(newContact);
      this.props.props.history.push('/contacts');
    }
    else {
      alert('A name and a phone number are required. The phone number must follow the pattern 123-456-7890. Please try again. If an email was entered, please check that it was entered properly.');
    }
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
              placeholder="Name (Required)"
              onChange={event => this.setState({ name: event.target.value })}
            />
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="userEmail"
              placeholder="example@gmail.com (Optional)"
              onChange={event => this.setState({ email: event.target.value })}
            />
            <label>Phone Number:</label>
            <input
              className="form-control"
              type="tel"
              name="userPhoneNumber"
              placeholder="123-456-7890 (Required)"
              onChange={event => this.setState({ phone_number: event.target.value })}
            />
            <label>Image URL:</label>
            <input
              className="form-control"
              type="url"
              name="userImage"
              placeholder="URL path to image (Optional)"
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

NewContact.proptypes = {
  addContact: PropTypes.func.required,
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.required
    })
  })
};

export default NewContact
