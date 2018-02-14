import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { sendEvent } from '../state'
class ContactListItem extends Component {

  updateCurrentContact = () => {
    sendEvent('updateCurrentContact', this.props)
  }

  updateTemporaryContact = () => {
    sendEvent('updateTemporaryContact', this.props)
  }

  setupEditContact = () => {
    this.updateCurrentContact()
    this.updateTemporaryContact()
    sendEvent('updateShowContacts', 'editContact')
  }



  render() {
    return (
      <li key={this.props.id} className='list-group-item'>
        <img className='border rounded-circle mr-3' src={this.props.imageURL} alt={this.props.name} />
        <span><strong>{this.props.name}</strong> <Link onClick={this.setupEditContact} to={`/contacts/${this.props.id}`}>edit</Link> <span className='btn-link' role='button' onClick={this.updateCurrentContact} data-toggle='modal' data-target='#deleteContactModal'>delete</span></span>
      </li>
    )
  }
}

export default ContactListItem
