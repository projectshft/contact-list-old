import { Link } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
      "id": this.generateId(),
      "name": '',
      "email": '',
      "phone_number": '',
      "img_url": ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick () {
    const newContact = {
      "id": this.state.id,
      "name": this.state.name,
      "email": this.state.email,
      "phone_number": this.state.phone_number,
      "img_url": this.state.img_url
    }
    this.props.addContact(newContact)
    this.props.history.push('/contacts')
  }

  generateId() {
    return Math.round(Math.random() * 100000000);
  }


  render () {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Add a Contact</h1>
          <form>
            <div className="form-group">
              <label for="name-input">Name</label>
              <input type="text" id="name-input" className="form-control" onChange={event =>
                this.setState({ "name": event.target.value })
              }/>
            </div>
            <div className="form-group">
              <label for="email-input">Email Address</label>
              <input type="email" id="email-input" className="form-control" onChange={event =>
                this.setState({ "email": event.target.value })
              }/>
            </div>
            <div className="form-group">
              <label for="phone-input">Phone Number</label>
              <input type="text" id="phone-input" className="form-control" onChange={event =>
                this.setState({ "phone_number": event.target.value })
              }/>
            </div>
            <div className="form-group">
              <label for="img-input">Profile Image URL</label>
              <input type="text" id="img-input" className="form-control" onChange={event =>
                this.setState({ "img_url": event.target.value })
              }/>
            </div>
            <button type="button" onClick={this.handleSubmitContactClick} className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-warning">
              <Link to='/contacts'>Contacts</Link>
            </button>
          </form>

        </div>
      </div>

    )
  }
}

export default ContactNew
