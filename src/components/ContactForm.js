import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types';

//setting up table for Contact Form

const ContactForm = ({handleFormChange, handleSubmitContactClick, contact}) => {
  return (
    <div className='col-md-8 offset-md-2'>
      <form className='contact-form'>
        <div className="form-group">
          <label htmlFor='contactName' className='float-left'>Name</label>
          <input type='text' className='form-control' id='contactName'
            defaultValue={contact ? contact.name : ''}
            onChange={event =>
              handleFormChange({ name: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor='contactPhoneNumber' className='float-left'>Phone Number</label>
          <input type='text' className='form-control' id='contactPhoneNumber'
            defaultValue={contact ? contact.phone_number : ''}
            onChange={event =>
              handleFormChange({ phone_number: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor='contactEmail' className='float-left'>Email</label>
          <input type='text' className='form-control' id='contactEmail'
            defaultValue={contact ? contact.email : ''}
            onChange={event =>
              handleFormChange({ email: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor='contactImageUrl' className='float-left'>Image Url</label>
          <input type='text' className='form-control' id='contactImageUrl'
            defaultValue={contact ? contact.image_url : ''}
            onChange={event =>
              handleFormChange({ image_url: event.target.value })
            }
          />
        </div>

        <button className="btn btn-primary" onClick={handleSubmitContactClick}>
          Submit
        </button>
      </form>

      

      <Link className='btn btn-secondary btn-lg float-left' to='/contacts'>
        Back To Contacts
      </Link>
    </div>
  )
}



ContactForm.propTypes = {
  handleFormChange: PropTypes.func.isRequired,
  handleSubmitContactClick: PropTypes.func.isRequired
};

export default ContactForm