import { Link } from 'react-router-dom'
import React from 'react'


//A contact form that will take a submitted form and turn it into a contact
class ContactForm extends React.Component {
  constructor () {
    super ()

    //Defaults for the state of the form
    this.state = {
      id: '',
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  generateId () {
    return Math.round(Math.random() * 100000000)
  }

  handleSubmitContactClick () {
    const newContact = {
      id: this.generateId(),
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };

    //Pushes the submitted form onto the contacts list url
    this.props.addContact(newContact)
    this.props.props.history.push('/contacts-list')
  }

  //Render function for displaying the form and using an onChange event to get
  //the new contact
  render () {
    return (
      <div>
        <form>

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

        //A link to go back to contacts
        <Link to='/contacts-list'>Contacts</Link>
      </div>
    )
  }
}

export default ContactForm
