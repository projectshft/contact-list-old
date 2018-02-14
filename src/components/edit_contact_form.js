import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { queryState, sendEvent } from '../state'

class EditContactForm extends Component {

  getCurrentContact = () => {
    return queryState('getCurrentContact')
  }
  getDefaultContact = () => {
    return queryState('getDefaultContact')
  }
  getTemporaryContact = () => {
    return queryState('getTemporaryContact')
  }

  validateAndUpdateTemporaryContact = (data) => {
    sendEvent('validateInput', data)
  }

  submitChanges = (event) => {
    // event.preventDefault()
    sendEvent('submitChangesIfValid')
    sendEvent('resetTemporaryContact')
    this.showContactsList()
  }

  showContactsList () {
    sendEvent('updateShowContacts', 'viewContacts')
  }

  setupViewContactsList = () => {
    this.showContactsList()
    sendEvent('resetTemporaryContact')
  }

  render() {
    return (
      <form className='needs-validation'>
        <div className='form-group'>
          <label htmlFor='inputName'>Name</label>
          <input type='text' className='form-control' id='inputName' onChange={event => this.validateAndUpdateTemporaryContact({type: 'NAME', payload: event.target.value })} defaultValue={this.getTemporaryContact().name} placeholder={this.getDefaultContact().name} required />
          <div className='invalid-feedback invalid-name'>Please enter a valid name (cannot be blank).</div>
        </div>
        <div className='form-group'>
          <label htmlFor='inputImageURL'>Image URL</label>
          <input type='text' className='form-control' id='inputImageURL' onChange={event => this.validateAndUpdateTemporaryContact({type: 'IMAGE_URL', payload: event.target.value })} defaultValue={this.getTemporaryContact().imageURL} placeholder={this.getDefaultContact().imageURL} required />
          <div className='invalid-feedback invalid-imageURL'>Please enter a valid URL (cannot be blank).</div>
        </div>
        <div className='form-group'>
          <label htmlFor='inputEmail'>Email</label>
          <input type='text' className='form-control' id='inputEmail' onChange={event => this.validateAndUpdateTemporaryContact({type: 'EMAIL', payload: event.target.value })} defaultValue={this.getTemporaryContact().email} placeholder={this.getDefaultContact().email} required />
          <div className='invalid-feedback invalid-email'>Please enter a valid email address (cannot be blank).</div>
        </div>
        <div className='form-group'>
          <label htmlFor='inputPhoneNumber'>Phone #</label>
          <input type='text' className='form-control' id='inputPhoneNumber' onChange={event => this.validateAndUpdateTemporaryContact({type: 'PHONE', payload: event.target.value })} defaultValue={this.getTemporaryContact().phoneNumber} placeholder={this.getDefaultContact().phoneNumber} required />
          <div className='invalid-feedback invalid-phone'>Please enter a valid phone number (10-13 digits).</div>
        </div>
        <Link className='btn btn-primary' to='/contacts' onClick={event => this.submitChanges(event)}>Save Changes</Link>
        {/* <button type='submit' className='btn btn-primary' onClick={event => this.submitChanges(event)}>Save Changes</button> */}
      </form>
    )
  }
}

export default EditContactForm
