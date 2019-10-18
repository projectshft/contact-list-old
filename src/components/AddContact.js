import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddContact extends Component {
  constructor () {
    super()

    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <form>
        <h3>New Contact Info</h3>
        <Link to="/contacts">Back</Link>
        <div className="form-group row">
          <div className="col-md-4">
            <input
            className="form-control"
            placeholder="Full Name"
            value={this.state.name}
            onChange={event => this.setState({name: event.target.value})}
            />
          </div>
        </div>
      </form>
      
    )
  }
}

export default AddContact;