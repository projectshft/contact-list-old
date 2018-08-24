import { Link } from 'react-router-dom'
import React from 'react'

class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
      name: '',
      number: '',
      email: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick () {
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      email: this.state.email
    };

    this.props.addContact(newContact)
    this.props.props.history.push('/Contacts')
  }

  render () {
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ number: parseInt(event.target.value, 10) })
        }/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <Link to='/Contacts'>Contacts</Link>
      </div>
    )
  }
}

export default ContactNew
