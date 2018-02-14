import { queryState, sendEvent } from '../state'
import React, { Component } from 'react'
import ContactListItem from './contact_list_item'

class ContactList extends Component {

  getContacts = () => {
    return queryState('getAllContacts')
  }

  getCurrentContact = () => {
    return queryState('getCurrentContact')
  }

  deleteClickedContact = () => {
    sendEvent('deleteClickedContact', this.getCurrentContact().id)
  }

  render() {
    return (
      <div className='row'>
        <div className='col'>
          <ul className='list-group'>
            {
              this.getContacts().map(contactProps => (
                <ContactListItem key={contactProps.id} {...contactProps} />
              ))
            }
          </ul>

          <div className='modal fade' id='deleteContactModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='deleteContactModalLabel'>Confirm Delete</h5>
                  <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <p>Are you sure you want to delete {this.getCurrentContact() ? this.getCurrentContact().name : 'this contact'}?</p>
                  <p><em>This cannot be undone.</em></p>
                </div>
                <div className='modal-footer justify-content-start'>
                  <button type='button' className='btn btn-outline-danger' onClick={this.deleteClickedContact} data-dismiss='modal'>Delete</button>
                  <button type='button' className='btn btn-outline-secondary' data-dismiss='modal'>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactList
