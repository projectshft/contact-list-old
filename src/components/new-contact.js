import { Link } from 'react-router-dom'
import React from 'react'

class NewContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      id: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this);
  }

  handleSubmitContactClick (contactId) {
    const newContact = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: parseInt(this.state.phoneNumber),
      id: contactId
    };

    this.props.addContact(newContact)
    this.props.props.history.push('/')
  }

  generateId () {
    let contactId = 2;
    return contactId
  }

  render () {
    return (
      <div>
        <form className= 'AddContact'>
          <h2>Add a New Contact</h2>  
          <label>Contact Name</label>
          <input type='text' className='form-control'onChange={event =>
            this.setState({ name: event.target.value })
          }/>

          <br/>

          <label>Email</label>
          <input type='text' className='form-control'onChange={event =>
            this.setState({ email: event.target.value })
          }/>

          <br/>
          <label>Phone Number</label>
          <input type='text' className='form-control'onChange={event =>
            this.setState({ phoneNumber: parseInt(event.target.value, 10) })
          }/>
          
          <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <Link to='/'>Contacts</Link>
      </div>
    )
  }
}

export default NewContact
