import { Link } from 'react-router-dom'
import React from 'react'
import uuid from 'react-uuid'

class NewContact extends React.Component {
  constructor() {
    super()

    this.state = {
      id: '',
      name: '',
      phone: '',
      email: '',
      picture: ''
    }

    this.handleSubmitNewContact = this.handleSubmitNewContact.bind(this)
  }

  handleSubmitNewContact() {
    const newContact = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
      picture: this.state.picture
    };

    this.props.addContact(newContact)
    console.log(newContact)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <form>
          <label>Name</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ name: event.target.value })
          } />

          <br />

          <label>Number</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ number: parseInt(event.target.value, 10) })
          } />

          <br />

          <label>email</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ email: event.target.value })
          } />

          <br />

          <label>Picture</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ picture: event.target.value })
          } />

          <button type="button" onClick={this.handleSubmitNewContact}>Submit</button>
        </form>

        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default NewContact

