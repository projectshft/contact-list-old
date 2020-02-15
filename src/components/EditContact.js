import React, { Component } from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types';

class EditContact extends Component {
  constructor(props) {
    super(props)

    this.currentContact = {}

    this.props.contacts.forEach(contact => {
      if (contact.id === this.props.contactId) {
        this.currentContact = _.clone(contact)
      }
    })

    this.state = {
      id: this.props.contactId,
      name: this.currentContact.name,
      phone: this.currentContact.phone,
      email: this.currentContact.email,
      imageURL: this.currentContact.imageURL
    }

    this.onClick = this.onClick.bind(this)
  }


  onClick () {
    const editedContact = {
      id: this.state.id,
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      imageURL: this.state.imageURL
    }

    const validEmail = (email) => {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    if (editedContact.name.length == 0) {
      alert("The name field cannot be empty!")
      return true
    } else if (editedContact.name.length > 30) {
      alert("The name field cannot be longer than 30 characters!")
      return true
    } else if (editedContact.phone.length > 11 || editedContact.phone.length < 10) {
      alert("Please enter a 10 digit phone number")
      return true
    } else if (!validEmail(editedContact.email)) {
      alert ("Please enter a valid email!")
      return true
    } else if (editedContact.imageURL.length == 0) {
      alert("Please enter a image url")
      return true
    }


    this.props.editContact(editedContact)
    this.props.history.push('/contacts')
  }

render() {
  return (
    <div>
      <div className="row">
        <div className="col col-sm-3"></div>
        <div className="col col-sm-8 col-md-6">
          <h2>Edit Contact</h2>
          <form className="form-group">
            <input className="form-control" type="text" defaultValue={this.currentContact.name} onChange={event =>
              this.setState({ name: event.target.value })}></input>

            <br></br>

            <input className="form-control" type="text" defaultValue={this.currentContact.phone} maxLength="10" onChange={event =>
              this.setState({ phone: event.target.value })}></input>

            <br></br>

            <input className="form-control" type="text" defaultValue={this.currentContact.email} maxLength="30" onChange={event =>
              this.setState({ email: event.target.value })}></input>

            <br></br>

            <input className="form-control"type="text" defaultValue={this.currentContact.imageURL}  onChange={event =>
              this.setState({ imageURL: event.target.value })}></input>

            <br></br>

            <button className="btn btn-primary" onClick={this.onClick}>Save</button>
        </form>
        </div>
        <div className="col col-md-3"></div>
      </div>
    </div>
    );
  }
}

EditContact.propTypes = {
  contactId: PropTypes.string
}

export default EditContact;
