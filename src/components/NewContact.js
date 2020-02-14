import React, { Component } from 'react';

class NewContact extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      phone: null,
      email: "",
      imageURL: ""
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    const newContact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      imageURL: this.state.imageURL
    }

    this.props.addContact(newContact)
    this.props.history.push('/contacts')
  }

  render() {
    return (
      <div>
        <h2>New Contact</h2>
        <form>
          <input type="text" placeholder="Name" onChange={event =>
            this.setState({ name: event.target.value })}></input>

          <br></br>

          <input type="text" placeholder="Phone" onChange={event =>
            this.setState({ phone: event.target.value })}></input>

          <br></br>

          <input type="text" placeholder="Email" onChange={event =>
            this.setState({ email: event.target.value })}></input>

          <br></br>

          <input type="text" placeholder="Image" onChange={event =>
            this.setState({ imageURL: event.target.value })}></input>

          <br></br>

          <button className="btn button-primary" onClick={this.onClick}>Save</button>
        </form>
      </div>
    );
  }
}

export default NewContact;
