import React, { Component } from "react";
import ContactItem from './contactItem'
import { Route } from 'react-router-dom';


class ContactList extends Component {
  constructor(props) {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      imgUrl: '',
      
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  contactList = () => this.props.contacts.map(person => (
    <ContactItem key={this.props.contacts.key} contact={person} />
  ))

  handleClick () {
    let contactInfo = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      phone:this.state.phone,
      email:this.state.email,
      imgUrl:this.state.imgUrl,
      key: Math.round(Math.random() * 100000000)
    }
    this.props.addContact(contactInfo)
  }
 

  render() {
    return <div>
      <div className="row">{this.contactList(this.contacts)}</div>
      <div className="row add-contact">
        <div className="col-md-9">
          <label>First Name</label>
          <input type="text" className="form-control" value={this.state.firstName} onChange={event => this.setState(
            { firstName: event.target.value }
          )} />
        </div>

        <div className="col-md-9">
          <label>Last Name</label>
          <input type="text" className="form-control" value={this.state.lastName} onChange={event => this.setState(
            { lastName: event.target.value }
          )} />
        </div>
        <div className="col-md-9">
          <label>Email</label>
          <input type="text" className="form-control" value={this.state.email} onChange={event => this.setState(
            { email: event.target.value }
          )} />
        </div>
        <div className="col-md-9">
          <label>Phone #</label>
          <input type="text" className="form-control" value={this.state.phone} onChange={event => this.setState(
            { phone: event.target.value }
          )} />
        </div>
        <div className="col-md-9">
          <label>Pic URL</label>
          <input type="text" className="form-control" value={this.state.imgUrl} onChange={event => this.setState(
            { imgUrl: event.target.value }
          )} />
          <br />
        </div>
      </div>
      <div className="row">
        <button onClick={this.handleClick} className="btn btn-confirm col-md-12 add">
          Add Contact
          </button>
      </div>
    </div>;
  }
}

export default ContactList
