import React from 'react'

const EditContactForm = () => (
  <form>
    <div className='form-group'>
      <label htmlFor='inputName'>Name</label>
      <input type='text' className='form-control' id='inputName' placeholder='' required />
    </div>
    <div className='form-group'>
      <label htmlFor='inputImageURL'>Image URL</label>
      <input type='text' className='form-control' id='inputImageURL' required />
    </div>
    <div className='form-group'>
      <label htmlFor='inputEmail'>Email</label>
      <input type='text' className='form-control' id='inputEmail' required />
    </div>
    <div className='form-group'>
      <label htmlFor='inputPhoneNumber'>Phone #</label>
      <input type='text' className='form-control' id='inputPhoneNumber' required />
    </div>
    <button type='button' className='btn btn-primary'>Save Changes</button>
  </form>
)

export default EditContactForm
