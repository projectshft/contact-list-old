import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class FullContactList extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }
//take in the key of the element user wants to delete and send it to the Apps deleteContact function
  handleDelete(target) {
    this.props.deleteContact(target);
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
          //when the trash can button is clicked take the key of the clicked on contact and pass it into a handler function
          <i className="fas fa-trash-alt"  onClick ={() => {this.handleDelete(contact.key)}}></i>
        </li>
      ))
    }
  </ul>
</div>
)
}

}

export default FullContactList
