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
      <form>
        <div className="form-group">
          <label for="email-input">Email Address</label>
          <input type="email" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    )
  }
}

export default ContactNew
