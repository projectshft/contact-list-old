import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'

class ContactList extends Component {
  constructor(props) {

    super(props)
  }

  render() {
    return (
      <div className='row'>
        <div className='col'>

          <ul className='list-group'>
            {
              this.props.contacts.map(contact => (
                <li key={contact.id}>
                  {contact.name} <Link to={`/contacts/${contact.id}`}>edit</Link> <span className='link' data-toggle='modal' data-target='#deleteContactModal' data-backdrop='false'>delete</span>
                </li>
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
                  <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
                  <button type='button' className='btn btn-primary'>Save changes</button>
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
