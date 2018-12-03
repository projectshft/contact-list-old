import React, { Component } from "react";
import ContactItem from './contactItem'
import { Route } from 'react-router-dom';
import PropTypes from "prop-types";



class ContactList extends Component {
  constructor(props) {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      imgUrl: ''

    }
    this.handleClick = this.handleClick.bind(this)
    console.log(props);
  }

  contactList = (props) => this.props.contacts.map(person => {

    return <ContactItem key={this.props.contacts.key} contact={person} props={props} />
  })

  handleClick() {
    let blankState = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      imgUrl: ''
    }
    let contactInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      imgUrl: this.state.imgUrl,
      key: Math.round(Math.random() * 100000000)
    }
    //adding a default image if left blank
    if (!contactInfo.imgUrl) { contactInfo.imgUrl = 'http://www.b-u.by/images/uncnown.png'}
    this.props.addContact(contactInfo);
    this.setState(
      {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        imgUrl: ''
      })
  }


  render() {
    return <div>
      <div className="row">{this.contactList(this.props)}</div>
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
          <input type="text" className="form-control" placeholder="Leave blank for default image" value={this.state.imgUrl} onChange={event => this.setState(
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


//Should recieve an array of contact Objects with the specific data
ContactList.propType = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  }))
}
