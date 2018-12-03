import { Link } from 'react-router-dom'
import React from 'react'


class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
      id: '',
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
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
    this.props.props.history.push('/contacts/:id')
  }

  render () {
    return (
      <div>
        <form>
        <label>Id: </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ id: parseInt(event.target.id, 10) })
        }/>

        <br/>

        <label>Name: </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Image URL: </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ image_url: event.target.value })
        }/>

        <br/>

        <label>Email: </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <label>Phone Number: </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phone_number: event.target.value })
        }/>

        <br/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <br/>

        <Link to='/contacts/:id'>Roster</Link>
      </div>
    )
  }
}

export default ContactNew
