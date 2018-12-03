import React, { Component } from 'react'
import StyledLink from './StyledLink.js'
import PropTypes from 'prop-types';

class ContactsRow extends Component {
  constructor(props) {
    super(props)

    this.removeThisContact = this.removeThisContact.bind(this);
  }

  removeThisContact (id) {
    this.props.removeContact(id);
  }

  render(){
    return (
        <tr>
          <td><StyledLink to={`/contacts/${this.props.contact.id}`}>{this.props.contact.name}</StyledLink></td>
          <td><a className="edit " tabIndex='0' data-id={this.props.contact.id}>edit</a></td>
          <td><a className="delete" onClick={() => this.removeThisContact(this.props.contact.id)} tabIndex='0'>delete</a></td>
        </tr>
    )
  }
}

ContactsRow.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.required,
    name: PropTypes.string.required
  })
};

export default ContactsRow
