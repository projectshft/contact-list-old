import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import ContactForm from './ContactForm';

class EditContact extends Component {
  constructor(props) {
    super(props);

    //destructured into this.state.contact for readability
    this.state={
      contact: {..._.find(this.props.contacts, {id: +this.props.props.match.params.id})}
    };
  }
  
  render() {
    return (
      <div>
        <ContactForm props={this.props.props} contact={this.state.contact} editContact={this.props.editContact} />
        <Link to={`/contacts/${this.state.contact.id}`}>Cancel</Link>
      </div>
    )
  }
}

export default EditContact;