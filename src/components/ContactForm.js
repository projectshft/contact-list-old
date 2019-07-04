import { Link } from 'react-router-dom'
import React from 'react'

const ContactForm = ({handleFormChange, handleSubmitContactClick, contact}) => {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type='text' className='form-control'
              defaultValue={contact ? contact.name : ''}
              onChange={event =>
                handleFormChange({ name: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type='text' className='form-control'
              defaultValue={contact? contact.phone_number : ''}
              onChange={event =>
                handleFormChange({ phone_number: event.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type='text' className='form-control'
              defaultValue={contact? contact.email : ''}
              onChange={event =>
                handleFormChange({ email: event.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Image Url</label>
            <input type='text' className='form-control'
              defaultValue={contact? contact.image_url : ''}
              onChange={event =>
                handleFormChange({ image_url: event.target.value })
              }
            />
          </div>

          <button type="button btn-primary" onClick={handleSubmitContactClick}>Submit</button>
        </form>

        <Link className='btn btn-secondary btn-lg' to='/contacts'>Back To Contacts</Link>
      </div>
    )
  }


export default ContactForm