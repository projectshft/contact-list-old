import { Link } from 'react-router-dom'
import React from 'react'

class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
        id: '', 
        name: '', 
        phone: '', 
        email: '', 
        picture: ''
    }

    this.handleSubmitPlayerClick = this.handleSubmitPlayerClick.bind(this)
  }

  handleSubmitPlayerClick () {
    const newPlayer = {
        id: this.state.id,
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        picture: this.state.picture
    };

    this.props.addContact(newPlayer)
    this.props.history.push('/roster')
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

        <label>Phone</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phone: parseInt(event.target.value, 10) })
        }/>

        <br/>

        <label>email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <button type="button" onClick={this.handleSubmitPlayerClick}>Submit</button>
        </form>

        <Link to='/'>sending new conatct</Link>
      </div>
    )
  }
}

export default ContactNew