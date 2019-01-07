import { Link } from 'react-router-dom'
import React from 'react'

class NewUser extends React.Component {
  constructor () {
    super ()

    this.state = {
      id: '',
      name: '',
      email: '',
      phone_number: ''
    }

    this.handleSubmitUserClick = this.handleUserClick.bind(this)
  }

  handleSubmitUserClick () {
    const newUser = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number
    };

    this.props.addUser(newUser)
    // this.props.props.history.push('/roster')
  }

  render () {
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name : event.target.value })
        }/>

        <br/>

        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: (event.target.value) })
        }/>

        <br/>

        <label>Position</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ position: event.target.value })
        }/>

        <button type="button" onClick={this.handleSubmitUserClick}>Submit</button>
        </form>

        <Link to='/userList'>Contact List</Link>
      </div>
    )
  }
}

export default NewUser