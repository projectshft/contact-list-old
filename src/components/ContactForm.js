import { Link } from 'react-router-dom'
import React from 'react'

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type='text' className='form-control'
              defaultValue={this.props.contact ? this.props.contact.name : ''}
              onChange={event =>
                this.props.handleFormChange({ name: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type='text' className='form-control'
              defaultValue={this.props.contact? this.props.contact.phone_number : ''}
              onChange={event =>
                this.props.handleFormChange({ phone_number: event.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type='text' className='form-control'
              defaultValue={this.props.contact? this.props.contact.email : ''}
              onChange={event =>
                this.props.handleFormChange({ email: event.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Image Url</label>
            <input type='text' className='form-control'
              defaultValue={this.props.contact? this.props.contact.image_url : ''}
              onChange={event =>
                this.props.handleFormChange({ image_url: event.target.value })
              }
            />
          </div>

          <button type="button btn-primary" onClick={this.props.handleSubmitContactClick}>Submit</button>
        </form>

        <Link className='btn btn-secondary btn-lg' to='/contacts'>Back To Contacts</Link>
      </div>
    )
  }
}

export default ContactForm