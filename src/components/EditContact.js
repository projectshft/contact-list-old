import React, { Component } from 'react';
import _ from 'lodash'

class EditContact extends Component {
  constructor(props) {
    super(props)

    this.currentContact = {}

    this.props.contacts.forEach(contact => {
      if (contact.id == this.props.contactId) {
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

    this.props.editContact(editedContact)
    this.props.history.push('/contacts')
  }

  render() {
    return (
      <div>
        <h2>Edit</h2>
        <form>
          <input type="text" defaultValue={this.currentContact.name} onChange={event =>
            this.setState({ name: event.target.value })}></input>

          <br></br>

          <input type="text" defaultValue={this.currentContact.phone}  onChange={event =>
            this.setState({ phone: event.target.value })}></input>

          <br></br>

          <input type="text" defaultValue={this.currentContact.email}  onChange={event =>
            this.setState({ email: event.target.value })}></input>

          <br></br>

          <input type="text" defaultValue={this.currentContact.imageURL}  onChange={event =>
            this.setState({ imageURL: event.target.value })}></input>

          <br></br>

          <button className="btn button-primary" onClick={this.onClick}>Save</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
