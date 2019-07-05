import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class FullContactList extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    console.log('test delete in contact list')
    console.log(this.props);
    this.props.deleteContact();
  }
  render() {
    return (
<div>
  <h1> Contacts </h1>
  <Link to ='/contacts/new'>
    <button className ='btn btn-primary'>
      Add Contact
      <i className="fas fa-plus"></i>
    </button>
  </Link>

  <ul>
    {
      this.props.contactList.map((contact) => (
        <li key={contact.key}>
          <i className="fas fa-user"></i>
          <Link to ={`/contacts/${contact.key}`}>{contact.name}</Link>
          <i className="fas fa-trash-alt" onClick ={this.handleDelete}></i>
        </li>
      ))
    }
  </ul>
</div>
)
}

}

export default FullContactList
