import { Link } from 'react-router-dom'
import React from 'react'

class NewContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      contactId: 0
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this);
  }

  handleSubmitContactClick () {
    //idIndex lets generateID always use the newest contactId to generate the next one
    let idIndex = this.props.contacts.length-1
    let newContactId = this.props.generateId(this.props.contacts[idIndex].contactId)

    const newContact = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: parseInt(this.state.phoneNumber),
      contactId: newContactId
    };
    
    //Edge case handling
    if (newContact.name === ''  || newContact.email === '' || newContact.phoneNumber === '') {
      return alert('The contact form must be fully completed')
    } else if (!newContact.email.includes('@')){
      return alert('Invalid email address')
    }
    //pushes new contact into state
    this.props.addContact(newContact)
    //redirects back to root homepage
    this.props.props.history.push('/')
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

        <Link to='/'>Back to Contacts List</Link>
      </div>
    )
  }
}

export default NewContact
