import React, {Component} from 'react'
import { queryState, sendEvent } from '../state'

class EditContactForm extends Component {

  constructor(props) {

    super(props)
  }

  getCurrentContact = () => {
    return queryState('getCurrentContact')
  }
  getTemporaryContact = () => {
    return queryState('getTemporaryContact')
  }

  render() {
    return (
      <form>
        <div className='form-group'>
          <label htmlFor='inputName'>Name</label>
          <input type='text' className='form-control' id='inputName' value={this.getCurrentContact().name} placeholder={this.getTemporaryContact().name} required />
        </div>
        <div className='form-group'>
          <label htmlFor='inputImageURL'>Image URL</label>
          <input type='text' className='form-control' id='inputImageURL' value={this.getCurrentContact().imageURL} placeholder={this.getTemporaryContact().imageURL} required />
        </div>
        <div className='form-group'>
          <label htmlFor='inputEmail'>Email</label>
          <input type='text' className='form-control' id='inputEmail' value={this.getCurrentContact().email} placeholder={this.getTemporaryContact().email} required />
        </div>
        <div className='form-group'>
          <label htmlFor='inputPhoneNumber'>Phone #</label>
          <input type='text' className='form-control' id='inputPhoneNumber' placeholder={this.getTemporaryContact().phoneNumber} required />
        </div>
        <button type='button' className='btn btn-primary'>Save Changes</button>
      </form>
    )
  }
}

export default EditContactForm
