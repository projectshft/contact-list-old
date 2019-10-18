import { Link } from 'react-router-dom'
import React from 'react'

class ContactNew extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      id: '',
      phone: '',
      email: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick() {
    const newContact = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      id: Math.round(Math.random() * 100000000)
    };

    this.props.addContact(newContact);
    this.props.props.history.push('/contacts')
    this.props.toggleRedirect();
  }

  render() {
    return (
      <div>
        <form id="contact-form">
          <label>Name</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ name: event.target.value })
          } />

          <br />

          <label>Phone</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ phone: event.target.value})
          } />

          <br />

          <label>email</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ email: event.target.value })
          } />

          <button id="submit-contact-button"type="button" className="btn btn-primary" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <Link to='/contacts' id="return-to-contacts" onClick={this.props.toggleRedirect}>Contacts</Link>
      </div>
    )
  }
}

export default ContactNew
