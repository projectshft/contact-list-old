import { Link } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
      "id": '',
      "name": '',
      "email": '',
      "phone_number": '',
      "img_url": ''
    }
  }


  render () {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Add a Contact</h1>
          <form>
            <div className="form-group">
              <label for="name-input">Name</label>
              <input type="text" id="name-input" className="form-control"/>
            </div>
            <div className="form-group">
              <label for="email-input">Email Address</label>
              <input type="email" id="email-input" className="form-control"/>
            </div>
            <div className="form-group">
              <label for="phone-input">Phone Number</label>
              <input type="text" id="phone-input" className="form-control"/>
            </div>
            <div className="form-group">
              <label for="img-input">Profile Image URL</label>
              <input type="text" id="img-input" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <button type="button" className="btn btn-warning">
            <Link to='/contacts'>Contacts</Link>
          </button>
        </div>
      </div>

    )
  }
}

export default ContactNew
