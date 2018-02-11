import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import { queryState, sendEvent } from '../state'
import React, { Component } from 'react'
import ContactListItem from './contact_list_item'

class ContactList extends Component {
  constructor(props) {

    super(props)
  }

  getContacts = () => {
    return queryState('getAllContacts')
  }

  getCurrentContact = () => {
    return queryState('getCurrentContact')
  }

  showLocation = () => {
    console.log(this.props.location.pathname)
  }

  deleteClickedContact = () => {
    sendEvent('deleteClickedContact', this.getCurrentContact().id)
  }

  render() {
    return (
      <div className='row'>
        <div className='col'>
          <button type='button' className='btn btn-secondary-outline' onClick={this.showLocation}>Show Location</button>
          <ul className='list-group'>
            {
              this.getContacts().map(contact => (
                <ContactListItem {...contact} />
                // <li key={contact.id}>
                //   {contact.name} <Link to={`/contacts/${contact.id}`}>edit</Link> <span className='btn-link' data-toggle='modal' data-target='#deleteContactModal' data-backdrop='false'>delete</span>
                // </li>
              ))
            }
          </ul>



          {/* <button type='button' className='btn btn-primary' data-toggle='modal' data-target='#deleteContactModal' data-backdrop='false'>
            Delete
          </button> */}

          <div className='modal fade' id='deleteContactModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <p>Are you sure you want to delete this contact?</p>
                  <p><em>(This cannot be undone.)</em></p>
                </div>
                <div className='modal-footer'>
                  <button type='button' className='btn btn-outline-primary' onClick={this.deleteClickedContact} data-dismiss='modal'>OK</button>
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
