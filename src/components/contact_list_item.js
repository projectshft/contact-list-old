import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { sendEvent } from '../state'
class ContactListItem extends Component {

  constructor(props) {
    super(props)
  }

  updateCurrentContact = () => {
    sendEvent('updateCurrentContact', this.props)
  }

  setupEditContact = () => {
    this.updateCurrentContact()
    sendEvent('updateShowContacts', 'editContact')
  }



  render() {
    return (
      <li key={this.props.id} className='list-group-item'>
        {this.props.name} <Link onClick={this.setupEditContact} to={`/contacts/${this.props.id}`}>edit</Link> <span className='btn-link' role='button' onClick={this.updateCurrentContact} data-toggle='modal' data-target='#deleteContactModal'>delete</span>
      </li>
    )
  }
}

export default ContactListItem
