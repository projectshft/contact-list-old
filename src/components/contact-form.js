import { Link } from 'react-router-dom'
import React from 'react'

class ContactForm extends React.Component {
  constructor () {
    super ()

    this.state = {
      id: '',
      name: '',
      image_url: '',
      email: '',
      phone_number: '1234567890'
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }



  handleSubmitContactClick () {
    const newContact = {
      id: this.state.id,
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };

    this.props.addContact(newContact)
    this.props.props.history.push('/contacts-list')
  }

  render () {
    return (
      <div>
        <form>
        <label>ID</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ id: parseInt(event.target.value, 10) })
        }/>

        <br/>

        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Image</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ image_url: event.target.value })
        }/>

        <br/>

        <label>E-Mail</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <label>Phone Number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phone_number: event.target.value })
        }/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <Link to='/contacts-list'>Contacts</Link>
      </div>
    )
  }
}

export default ContactForm
