import React, { Component } from 'react';

class NewContact extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      phone: "",
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

    const validEmail = (email) => {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    if (newContact.name.length == 0) {
      alert("The name field cannot be empty!")
      return true
    } else if (newContact.name.length > 30) {
      alert("The name field cannot be longer than 30 characters!")
      return true
    } else if (newContact.phone.length > 11 || newContact.phone.length < 10 ) {
      alert("Please enter a 10 digit phone number")
      return true
    } else if (!(/^\d+$/.test(newContact.phone))) {
      alert("Please only use numbers 0-9 in the phone number")
      return true
    } else if (!validEmail(newContact.email)) {
      alert ("Please enter a valid email!")
      return true
    } else if (newContact.imageURL.length == 0) {
      alert("Please enter a image url")
      return true
    }

    this.props.addContact(newContact)
    this.props.history.push('/contacts')
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col col-sm-2.5"></div>
          <div className="col col-sm-8 col-md-7">
            <h2>New Contact</h2>
            <form className="form-group">
              <input className="form-control" type="text" placeholder="Name" maxLength="20" onChange={event =>
                this.setState({ name: event.target.value })}></input>

              <br></br>

              <input className="form-control" type="text" placeholder="Phone (Use only numbers 0-9, no slashes, dashes or dots)" maxLength="10" onChange={event =>
                this.setState({ phone: event.target.value })}></input>

              <br></br>

              <input className="form-control" type="text" placeholder="Email" maxLength="30" onChange={event =>
                this.setState({ email: event.target.value })}></input>

              <br></br>

              <input className="form-control"type="text" placeholder="Image" onChange={event =>
                this.setState({ imageURL: event.target.value })}></input>

              <br></br>

              <button className="btn btn-primary" onClick={this.onClick}>Save</button>
          </form>
          </div>
          <div className="col col-md-2.5"></div>
        </div>
      </div>
    );
  }
}

export default NewContact;
