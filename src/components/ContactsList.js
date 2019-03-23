import React, { Component } from 'react';
import Contact from './Contact';

class ContactsList extends Component {
  handleClick = () => {
    this.props.history.push('/contacts/new');
  };

  detailView = e => {
    if (!e.target.classList.contains('delete')) {
      this.props.history.push(`/contacts/${e.currentTarget.id}`);
    }
  };

  render() {
    return (
      <div>
        <h1>Contacts List</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {/* Will need to map through the list of contacts and populate with Contact components */}
            {this.props.contacts.map((contact, index) => (
              <Contact
                key={contact.id}
                id={contact.id}
                number={index + 1}
                contact={contact}
                deleteContact={this.props.deleteContact}
                detailView={this.detailView}
              />
            ))}
          </tbody>
        </table>

        <button className="btn btn-primary" onClick={this.handleClick}>
          Add New Contact
        </button>
      </div>
    );
  }
}

export default ContactsList;
