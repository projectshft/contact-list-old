import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { queryState, sendEvent } from '../state'

class ContactEdit extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      phone_number: '',
      image_url: ''
    }
  }

  handleClick = () => {
    const newContact =
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      image_url: this.state.image_url
  }

  this.props.addContact(newContact)
}

render ()
  return (
    <form className="addContact">
      <h3>Edit Contact</h3>

      <div className="form-group">
        <input
          className="form-control"
          placeholder="Name"
          value={this.state.name}
          onChange={event => this.setState({name: event.target.value})}
          />

          <br/>

        <input
          className="form-control"
          placeholder="Email"
          value={this.state.email}
          onChange={event => this.setState({email: event.target.value})}
          />

          <br/>

        <input
          className="form-control"
          placeholder="Phone Number"
          value={this.state.phone_number}
          onChange={event => this.setState({phone_number: event.target.value})}
          />

          <br/>

        <input
          className="form-control"
          placeholder="image_url"
          value={this.state.image_url}
          onChange={event => this.setState({image_url: event.target.value})}
          />
      </div>
      <button onClick={this.handleClick} type="button" className="btn btn-primary add-post">Post</button>
    </form>
    );
  }
}



export default ContactEdit;
