import { Link } from 'react-router-dom'
import React from 'react'

class AddContact extends React.Component {
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
    const newPlayer = {
      name: this.state.name,
      number: this.state.number,
      email: this.state.email
    };

    this.props.addPlayer(newPlayer)
    this.props.props.history.push('/roster')
  }

  render () {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Add a New Contact</h1>
        </header>
        <p/>

        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <p/>

        <label>Phone number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ number: parseInt(event.target.value, 10) })
        }/>

        <p/>

        <label>Email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <Link to='/'>Back to Contacts</Link>
      </div>
    )
  }
}

export default AddContact
