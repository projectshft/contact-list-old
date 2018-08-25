import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import _ from 'lodash'

class UpdateContactForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      image: '',
      email: '',
      phone: '',
      deleted: false,
      id: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick () {
  //   //whenever handleClick function is invoked -
  //   //1. create the contact object with with user/text properties and values from input
  //   const contact = {
  //     name: this.state.name,
  //     image: this.state.image,
  //     email: this.state.email,
  //     phone:this.state.phone,
  //     deleted:false,
  //     id:
  //
  //   }
  //   //2. give the created contact object reference to the UpdateContact function in app.js so that addContact on app.js will recieve the properties of the contact object and know to invoke updateContact and re-render the state.
  //   this.props.updateContact(contact);
  // }

    // const NewContactList = (props) => {

      //contactsList will pass in props and return a hash of the contacts
      // const updatedContactItem = props.contacts.map((contact, index) => {
      //   return (
      //     <Contact key={index} contact={contact} deleteContact={props.deleteContact}/>
      //   )
      // })

    handleClick () {
      //1. create the contact object with with user/text properties and values from input
      const updatedContact = {
        name: this.state.name,
        image: this.state.image,
        email: this.state.email,
        phone:this.state.phone,
        deleted:false,
        }
      //2. give the created contact object reference to the AddContact function in app.js so that addContact on app.js will recieve the properties of the contact object and know to invoke addContact and re-render the state.
      // this.props.addContact(contact);
    }


  render() {
    return (
      <form className="update-contact-form">
        <h3>Edit Contact</h3>

        <div className="form-group">
          <input className="form-control" placeholder="Name"
            value={this.state.name}
            onChange={event => this.setState({name: event.target.value})}/>

          <br/>

        <input
          className="form-control" placeholder="Image"
          value={this.state.image}
          onChange={event => this.setState({image: event.target.value})}/>

          <br/>

        <input
          className="form-control" placeholder="Email"
          value={this.state.email}
          onChange={event => this.setState({email: event.target.value})}/>

          <br/>

        <input
          className="form-control"
          placeholder="Phone"
          value={this.state.phone}
          onChange={event => this.setState({phone: event.target.value})}/>
        </div>

        <button onClick={this.handleClick} type="button" className="btn btn-primary update-contact">Save</button>
      </form>
    );
  }
}

export default UpdateContactForm;
