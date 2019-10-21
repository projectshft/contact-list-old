import { Link } from 'react-router-dom'
import React from 'react'

class NewContact extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      id: generateID()
    }

    this.handleSubmitPlayerClick = this.handleSubmitPlayerClick.bind(this)
  }

  handleSubmitPlayerClick () {
    const newContact = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber
    };

    this.props.addPlayer(newContact)
    this.props.props.history.push('/')
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

        <label>Email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>
        <label>Phone Number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phoneNumber: parseInt(event.target.value, 10) })
        }/>
        
        <button type="button" onClick={this.handleSubmitPlayerClick}>Submit</button>
        </form>

        <Link to='/'>Contacts</Link>
      </div>
    )
  }
}

export default NewContact
